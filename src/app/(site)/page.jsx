import "@/style/main/main.scss"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="main">
        <div className="lab-title">
          <div className="title">
            <h1>Damie<br/>Front-End<br/>Lab</h1>
          </div>
          <div className="main-lists">
            <Link href='/about'>About</Link>
            <Link href='/works'>Works</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: "Damie.Works",
  description : "학생과 개발자 사이, 다미의 포트폴리오 사이트입니다.",
  robots : "index, follow",
  viewport : "width=device-width, initial-scale=1.0",
  charset : "utf-8",
  keywords : "프론트엔드, 자바스크립트, 타입스크립트, 포트폴리오, 개발자, HTML, CSS, JaavaScript",
  author : "Damie",
  openGraph: {
      images:"https://imagedelivery.net/VdOi7nfD9mMJsHNS4Vve_A/36b7ce13-4f3b-48c9-1469-ec1319f11f00/public",
      title : "Damie.Works",
      description : "학생과 개발자 사이, 다미의 포트폴리오 사이트입니다."
  },
}