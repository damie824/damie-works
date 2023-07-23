import Link from "next/link";
import "@/style/admin/main.scss"
import Footer from "@/components/global/footer";

export default function AdminPage() {
    return(
        <main>
            <div className="main admin">
                <div className="admin-title">
                    <h2>관리자 페이지에 오신 것을 환영합니다!</h2>
                    <p>글을 올리고, 새로운 관리자를 설정하실 수 있어요</p>
                </div>
                <div className="uploader-container">
                    <Link className="uploader" href='/admin/upload/posts'>
                        <div className="uploader-title">
                            <h2>Upload Your Post</h2>
                            <p>당신의 생각을 업로드하세요!</p>
                        </div>
                    </Link>
                    <Link className="uploader" href='/admin/upload/works'>
                        <div className="uploader-title">
                            <h2>Upload Your Works</h2>
                            <p>새로운 것들을 제작하셨나요?</p>
                        </div>
                    </Link>
                </div>
                <Link className="new-admin" href='/admin/new'>
                        <div className="new-admin-title">
                            <h2>Generate New Key</h2>
                            <p>관리자를 추가하고 싶으신가요?</p>
                        </div>
                </Link>
                <Footer/>
            </div>
        </main>
    )
}
