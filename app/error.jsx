'use client'

import Link from "next/link"
import '@/style/main/not-found.scss'
import Footer from "@/components/global/footer"

export default function Error({error, reset}) {

  console.log(error)
  return (
    <main>
      <div className="main">
        <div className="not-found">
          <div className="title">
            <h2>Error Detected</h2>
            <h2>무언가 잘못된 것 같아요..</h2>
          </div>
          <p className="main-lists">
            <Link onClick={()=>{ reset() }}>메인 페이지</Link>로 돌아가기
          </p>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
