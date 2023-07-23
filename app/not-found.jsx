import Link from "next/link"
import '@/style/main/not-found.scss'
import Footer from "@/components/global/footer"

export default function NotFound() {
    return (
      <main>
        <div className="main">
          <div className="not-found">
            <div className="title">
              <h2>404..</h2>
              <h2>Not Found</h2>
            </div>
            <p className="main-lists">
              <Link href='/'>메인 페이지</Link>로 돌아가기
            </p>
          </div>
          <Footer/>
        </div>
      </main>
    )
  }
  