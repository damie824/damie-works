'use client'

import Footer from "@/components/global/footer";
import "@/style/main/contact.scss"

export default function Contact() {

    return(
        <main>
            <div className="contact main">
                <div className="contact-body">
                    <h1>Contact Me!</h1>
                    <div className="divider"></div>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        fetch("/api/contact/send", {
                            method : "POST",
                            body : JSON.stringify({
                                title : e.target.title.value,
                                username : e.target.username.value,
                                email : e.target.email.value,
                                content : e.target.content.value
                            })
                        })
                    }} className="contact-form">
                        <div className="contact-title">
                            <input name="username" type="text" placeholder="이름을 입력해 주세요!" required/>
                            <input name="email" type="email" placeholder="이메일 입력해 주세요!" required/>
                        </div>
                        <input name="title" placeholder="제목을 입력해주세요!" required/>
                        <textarea name="content" placeholder="문의하실 내용을 입력해주세요!" required/>
                        <button type="submit">전송</button>
                    </form>
                    <Footer/>
                </div>
                <div className="contact-done">
                    <h2>성공적으로 전송했어요!</h2>
                    <p>빠른 시일 내 이메일로 답변해 드릴게요 :)</p>
                    <Footer/>
                </div>
            </div>
        </main>
    )
}

export const metadata = {
    title: "Contact - Damie",
    description : "저와 대화 한번 해 보실래요? 분명 재밌는 경험이 될 거라고 약속할게요!",
    robots : "index, follow",
    viewport : "width=device-width, initial-scale=1.0",
    charset : "utf-8",
    keywords : "프론트엔드, 자바스크립트, 타입스크립트, 포트폴리오, 개발자, HTML, CSS, JavaScript",
    author : "Damie",
    openGraph: {
        images:"https://imagedelivery.net/VdOi7nfD9mMJsHNS4Vve_A/383cc3f3-4b52-4903-b516-5d30dc0de700/public",
        title : "Contact - Damie",
        description : "저와 대화 한번 해 보실래요? 분명 재밌는 경험이 될 거라고 약속할게요!"
    },
}