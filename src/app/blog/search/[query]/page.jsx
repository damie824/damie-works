import PostPreview from "@/components/blog/preview";
import "@/style/blog/blog-main.scss";
import { prismaDB } from "@/util/prisma";

export const revalidate = 60;

export default async function BlogMain(props) {
    let db = prismaDB;

    let decodeStr = decodeURI(props.params.query);

    let query = decodeStr.replace(" ", " | ");

    let posts = await db.posts.findMany({
        orderBy: [
            {
                date : 'desc'
            }
        ],
        where : {
            OR : [
                {
                    title: {
                        contains: query
                    }
                },
                {
                    content : {
                        contains: query
                    }
                },
                {
                    hashtags : {
                        contains: query
                    }
                }
            ]
        }
    })

    return(
        <div className="blog-main-body">
            <div className="recent">
                <h2>{decodeStr}의 검색 결과에요!</h2>
            </div>
            <div className="preview-container">
                {posts.map((a, i) => {
                    return(
                        <PostPreview
                            key={i}
                            id = {a.id}
                            title = {a.title}
                            thumbnail = {a.thumbnail}
                            emoji = {a.emoji}
                            desc = {a.content.substr(0, 10) + ".."}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export async function generateMetadata({ params }) {

    let db = prismaDB;

    let decodeStr = decodeURI(params.query);

    let query = decodeStr.replace(" ", " | ");

    const title = "Search Result Of " + query;


    return {
        title: title,
        description : "다미 검색 엔진의 검색 결과입니다.",
        robots : "index, follow",
        viewport : "width=device-width, initial-scale=1.0",
        charset : "utf-8",
        author : "Damie",
        openGraph: {
            title : title,
        },
    }
}