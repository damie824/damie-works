import TypeWriter from "@/components/about/typer"
import Footer from "@/components/global/footer"
import monsterImg from "@/public/monster.png"
import "@/style/main/about.scss"
import Image from "next/image"

export default function About(){
    return(
        <>
            <main>
                <div className="about main">
                    <div className="about-title">
                        <h1>About Me</h1>
                        <div className="developer">
                            <p>만들기를 좋아하던 </p>
                            <TypeWriter strings={['어린 아이','평범한 학생']}/>
                        </div>
                        <span>학생과 개발자 사이, 이규연입니다</span>
                        <div className="mouse">
                            <div></div>
                            <div>{">>>"}</div>
                        </div>
                    </div>
                    <div className="about-main">
                        <div className="about-me">
                            <h2>반가워요! 전 이규연이라고 해요!</h2>
                            <p>
                                어린 시절 전 컴퓨터 관련 일을 하시는 부모님을 보며 자연스럽게 개발을 시작하게 되었어요.<br/>
                                프론트엔드 개발자라는 꿈을 위해서, 누구보다 열심히 노력하고 있다고 자부할 수 있어요 :)
                            </p>
                            <p>
                                전 어렸을 때부터 디자인을 좋아했어요. 개발자보단 디자이너가 되고 싶기도 했고요.<br/>
                                다른 개발자분들과의 차별점이 이 부분이라고 생각해요.<br/>
                                "디자인을 자신있어하는 개발자"라니.. 흔치 않아 보이잖아요!
                            </p>
                            <p>
                                전 제가 좋아하는 분야는 누구보다 열심히 공부하는 편이에요.<br/>
                                디자인부터 코딩까지 전부 그렇게 시작했고, 앞으로고 변하지 않을 거에요.
                            </p>
                            <p>
                                앞으로 전 더더욱 발전하기 위해 노력할 거에요!<br/>
                                다른 사람들과의 차별점을 만들기 위해서,<br/>
                                저 스스로와의 약속을 위해서 말이에요 XD
                            </p>
                            <Image className="mosnter" src={monsterImg} alt="monster"/>
                        </div>
                    </div>
                    <div className="stack">
                        <h2>전 이런 것들을 할 수 있어요!</h2>
                        <div className="stack-container">
                            <div className="difficulty">
                                <div><div className="good circle-desc"></div> : 자신이 있는 것들이에요! 맡겨만 주세요 :)</div>
                                <div><div className="soso circle-desc"></div> : 배우긴 했지만 아직 어색한 것들이에요!</div>
                                <div><div className="bad circle-desc"></div> : 아직 더 배워야 할 것들이에요 :(</div>
                            </div>
                            <h2>Front-End</h2>
                            <div className="stack-item-container">
                                <div className="stack-item">Javascript <div className="good"></div></div>
                                <div className="stack-item">Typescript <div className="good"></div></div>
                                <div className="stack-item">HTML / CSS <div className="good"></div></div>
                                <div className="stack-item">Dart <div className="soso"></div></div>
                                <div className="stack-item">React.js <div className="good"></div></div>
                                <div className="stack-item">Redux <div className="good"></div></div>
                                <div className="stack-item">Next.js <div className="good"></div></div>
                                <div className="stack-item">Sveltkit <div className="soso"></div></div>
                                <div className="stack-item">React Native <div className="good"></div></div>
                            </div>
                            <h2>Back-End</h2>
                            <div className="stack-item-container">
                                <div className="stack-item">Python <div className="good"></div></div>
                                <div className="stack-item">Go <div className="bad"></div></div>
                                <div className="stack-item">C <div className="bad"></div></div>
                                <div className="stack-item">MySQL <div className="good"></div></div>
                                <div className="stack-item">Prisma <div className="good"></div></div>
                                <div className="stack-item">Flask <div className="good"></div></div>
                                <div className="stack-item">Express.js <div className="soso"></div></div>
                            </div>
                            <h2>Collaboration</h2>
                            <div className="stack-item-container">
                                <div className="stack-item">Git / Github <div className="good"></div></div>
                                <div className="stack-item">Notion <div className="good"></div></div>
                                <div className="stack-item">Slack <div className="soso"></div></div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </main>
        </>
    )
}

export const metadata = {
    title: "About - Damie",
    description : "학생과 개발자 사이, 다미의 포트폴리오 사이트 중에서도 절 소개하는 페이지에요!",
    robots : "index, follow",
    viewport : "width=device-width, initial-scale=1.0",
    charset : "utf-8",
    keywords : "프론트엔드, 자바스크립트, 타입스크립트, 포트폴리오, 개발자, HTML, CSS, JaavaScript",
    author : "Damie",
    openGraph: {
        images:"https://imagedelivery.net/VdOi7nfD9mMJsHNS4Vve_A/ae01474e-19e8-44d7-3447-2a4117ca6200/public",
        title : "Admin - Damie",
        description : "학생이자 개발자인, 저에 대한 소개 페이지에요!"
    },
}