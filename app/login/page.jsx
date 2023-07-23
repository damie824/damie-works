import "@/style/main/login.scss"
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginForm from "@/components/login/form";

export default async function Login() {
    let session = await getServerSession(authOptions);
    if(!session){
        return (
            <main>
                <div className="main login">
                    <div className="login-form">
                        <h2>로그인</h2>
                        <LoginForm/>
                        <p className="signup">어드민 키는 있는데.. 계정이 없으신가요? <Link href="/signup">계정을 만드세요!</Link></p>
                    </div>
                </div>
            </main>
        )
    }
    else{
        return (
            <main>
                <div className="main login">
                    <div className="login-form">
                        <p className="signup">이미 로그인 하신 거 아니에요..?</p>
                    </div>
                </div>
            </main>
        )
    }
}