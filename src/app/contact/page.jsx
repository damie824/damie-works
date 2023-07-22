import ContactForm from "@/components/contact/form";
import Footer from "@/components/global/footer";
import "@/style/main/contact.scss"

export default function Contact() {

    return(
        <main>
            <div className="contact main">
                <div className="contact-body" id='form'>
                    <h1>Contact Me!</h1>
                    <div className="divider"></div>
                    <ContactForm/>
                    <Footer/>
                </div>
                <div className="contact-done" id='done'>
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