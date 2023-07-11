import PostPreview from "@/components/blog/preview";
import "@/style/blog/blog-main.scss";
import { prismaDB } from "@/util/prisma";

export const revalidate = 60;

export default async function BlogMain() {
    let db = prismaDB;

    let posts = await db.posts.findMany({
        orderBy: [
            {
                date : 'desc'
            }
        ]
    })

    return(
        <div className="blog-main-body">
            <div className="recent">
                <h2>{posts.length}개의 포스트들을 발견했어요!</h2>
            </div>
            <div className="preview-container">
                {posts.map((a, i) => {
                    return(
                        <PostPreview
                            id = {a.id}
                            title = {a.title}
                            thumbnail = {a.thumbnail}
                            emoji = {a.emoji}
                            desc = {a.content.substr(0, 10) + ".."}
                            key = {i}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export const metadata = {
    title: "Blog - Damie",
    description : "저의 기술 블로그 페이지에요! 풀스택 개발자인 저의 재밌는 상상들을 담았아요 :)",
    robots : "index, follow",
    viewport : "width=device-width, initial-scale=1.0",
    charset : "utf-8",
    keywords : "프론트엔드, 자바스크립트, 타입스크립트, 포트폴리오, 개발자, HTML, CSS, JaavaScript",
    author : "Damie",
    openGraph: {
        images:"https://imagedelivery.net/VdOi7nfD9mMJsHNS4Vve_A/94f118b7-9acd-4341-46d8-c0ba1724dd00/public",
        title : "Blog - Damie",
        description : "저의 기술 블로그 페이지에요! 풀스택 개발자인 저의 재밌는 상상들을 담았아요 :)"
    },
}