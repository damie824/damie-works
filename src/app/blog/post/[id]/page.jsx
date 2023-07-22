import UseComment from "@/components/blog/comments"
import { prismaDB } from "@/util/prisma";
import { BiTime } from "react-icons/bi"
import "@/style/blog/post.scss"
import PostReader from "@/components/blog/postReader";
import Link from "next/link";
import LikeButton from "@/components/blog/like";

export const revalidate = 60;

export default async function BlogPost(props) {
    let db = prismaDB;

    let post = await db.posts.findUnique({
        where : {
            id : props.params.id
        }
    })

    if(!post){
        return(
            <h2
                style={{
                    margin: "50px auto",
                    textAlign: "center",
                    
                }}
            >포스트를 발견할 수 없었어요</h2>
        )
    }

    const hashtags = post.hashtags.split(' ');

    return(
        <div className="blog-viewer">
            <div className="post-info">
                <div className="post-title">
                    <h1>{post.title}</h1>
                    <LikeButton like={post.like} id={post.id}/>
                </div>
                <div className="post-etc">
                    <div className="hashtag-container">
                        {
                            hashtags.map((a, i)=>{
                                return(
                                    <Link href={"/blog/search/" + a} key={i}>
                                        {a}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="post-date">
                        <BiTime/>
                        <p>{post.date}</p>
                    </div>
                </div>
            </div>
            <div className="post-viewer">
                <PostReader
                    value={post.content}
                />
            </div>
            <UseComment/>
        </div>
    )
}

export async function generateMetadata({ params }) {
    
    let db = await prismaDB;

    const id = params.id

    let thisPost = await db.posts.findUnique({
        where : {
            id: id
        }
    });

    let title = ""
    
    if(!thisPost) {
        title = "404 - Damie"
    }
    else {
        title = thisPost.title + "- Damie"
    }

    let keywords = thisPost.hashtags.replaceAll(" ", ", ");
    
    return {
        title: title,
        description : thisPost.content.substring(0, 20) + "..",
        robots : "index, follow",
        viewport : "width=device-width, initial-scale=1.0",
        charset : "utf-8",
        keywords : keywords,
        author : "Damie",
        openGraph: {
            images: [thisPost ? thisPost.thumbnail : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trendcentral.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fnever-gonna-give-you-up.jpg&f=1&nofb=1&ipt=824eaae6faeed063a35c398783acee390bdee56e8cf6d476d5d3e92fb7dedbfb&ipo=images"],
            title : title,
            description : thisPost.content.substring(0, 20) + ".."
        },
    }
}