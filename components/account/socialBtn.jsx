'use client'

import { signIn } from "next-auth/react";

export default function SocialBtn({icon : Icon, social, id, setLoading}) {
    
    function socialLogin(action) {
        setLoading(true);

        signIn(action, {redirect: false})
            .then((r)=>{
                if(r?.error) {
                    alert('오류')
                }

                if(r?.ok) {
                    alert('굳')
                }
            })
            .finally(() => setLoading(false));
    }
    
    return(
        <button className="socialBtn" onClick={()=>{socialLogin(id)}}>
            <Icon/>
            <p>Login With {social}</p>
        </button>
    )
}