import Footer from "@/components/global/footer"
import "@/style/main/works.scss"
import { prismaDB } from "@/util/prisma";
import Link from "next/link"

export const revalidate = 60;
  
export default async function Works() {
    let db = await prismaDB;

    let works = await db.works.findMany();

    return(
        <main>
            <div className="main">
                <h1 className="works-title">My Works</h1>
                <div className="projects">
                    {
                        works.map((a, i) => {
                            return(
                                <Project key={i} id={a.id} title={a.title} desc={a.desc} thumbnail={a.thumbnail}/>
                            )
                        })
                    }
                </div>
                <Footer/>
            </div>
        </main>
    )
}

function Project(props) {
    return(
        <Link href={'/works/'+props.id}>
            <div className="project">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <img src={props.thumbnail}/>
            </div>
        </Link>
    )
}

export const metadata = {
    title: "Works - Damie",
    description : "제가 만든 프로젝트들 좀 보고 가실래요? 분명히 재밌을 거에요!",
    robots : "index, follow",
    viewport : "width=device-width, initial-scale=1.0",
    charset : "utf-8",
    keywords : "프론트엔드, 자바스크립트, 타입스크립트, 포트폴리오, 개발자, HTML, CSS, JaavaScript",
    author : "Damie",
    openGraph: {
        images:"https://imagedelivery.net/VdOi7nfD9mMJsHNS4Vve_A/95b85980-5916-44c0-e941-5963aa553100/public",
        title : "Works - Damie",
        description : "제가 만든 프로젝트들 좀 보고 가실래요? 분명히 재밌을 거에요!"
    },
}
