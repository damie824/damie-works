'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm(){

    const router = useRouter()

    async function test(e){
        e.preventDefault()
        const email = document.getElementById('username').value
        const password = document.getElementById('password').value
        const response = await signIn("credentials", {
            email,
            password,
            redirect:false
        })
        if(response.ok){
            document.getElementById('invalid').style.display = 'none';
            router.push('/admin')
        }
        else{
            console.log(response)
            document.getElementById('invalid').style.display = 'block';
        }
    }
    return (
        <form onSubmit={test} className="login-form-main">
            <input id="username" type="text" placeholder="email" />
            <input id="password" type="password" placeholder="Password" />
            <p id='invalid' className="invalid">*이메일과 비밀번호를 확인해 주세요!</p>
            <button type="submit">로그인</button>
        </form>
    )
}