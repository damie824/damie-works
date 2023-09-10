import { prismaDB } from "@/util/prisma"
import Footer from "@/components/global/footer"
import "@/style/main/works.scss"
import NotFound from "@/qoapp/not-found";
import Link from "next/link";
import UseComment from "@/components/blog/comments";

export const dynamic = 'force-dynamic'

export default async function Post(props) {
    let db = await prismaDB;

    let thisWork = await db.works.findUnique({
        where : {
            id: props.params.id
        }
    });

    if(!thisWork){
        return <NotFound/>
    }

    return(
        <main>
            <div className="main post">
                <div className="project-thumbnail">
                    <img src={thisWork.thumbnail}/>
                </div>
                <div className="project-info">
                    <div className="project-title">
                        <h1>{thisWork.title}</h1>
                    </div>
                    <div className="project-etc">
                        <div className="main-Info">
                            <div className="date">
                                <h2>Date</h2>
                                <p>{thisWork.uploadDate}</p>
                            </div>
                            <div className="category">
                                <h2>Category</h2>
                                <p>{thisWork.category}</p>
                            </div>
                        </div>
                        <div className="Content">
                            <p>{thisWork.content}</p>
                        </div>
                    </div>
                </div>
                <div className="link">
                    <Link href={thisWork.Link}>
                        <p>View Project</p>
                    </Link>
                </div>
                <UseComment/>
                <Footer/>
            </div>
        </main>
    )
}
 
export async function generateMetadata({ params }) {
    
    let db = await prismaDB;

    const id = params.id

    let thisWork = await db.works.findUnique({
        where : {
            id: id
        }
    });

    let title = ""
    
    if(!thisWork) {
        title = "404 - Damie"
    }
    else {
        title = thisWork.title + "- Damie"
    }
    
    return {
        title: title,
        description : thisWork.content.substring(0, 20) + "..",
        robots : "index, follow",
        viewport : "width=device-width, initial-scale=1.0",
        charset : "utf-8",
        keywords : "프론트엔드, 자바스크립트, 타입스크립트, 포트폴리오, 개발자, HTML, CSS, JavaScript",
        author : "Damie",
        openGraph: {
            images: [thisWork ? thisWork.thumbnail : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trendcentral.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fnever-gonna-give-you-up.jpg&f=1&nofb=1&ipt=824eaae6faeed063a35c398783acee390bdee56e8cf6d476d5d3e92fb7dedbfb&ipo=images"],
            title : title,
            description : thisWork.content.substring(0, 20) + ".."
        },
    }
}