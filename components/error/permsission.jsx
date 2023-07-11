'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function PermissionErr() {
    const router = useRouter()

    useEffect(()=>{
        alert('권한이 없습니다.')
        router.push('/login');
    },[])

    return(
        <></>
    )
}