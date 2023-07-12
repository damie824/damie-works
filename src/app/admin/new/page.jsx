'use client'

import "@/style/admin/new-key.scss"
import { useEffect, useState } from "react"

export default async function NewKey() {
    const [key, setKey] = useState();
    
    useEffect(()=>{
        fetch('/api/admin/generate-key')
        .then((r)=>{
            if(r.ok) {
                return r.json()
            }
        })
        .then((r)=>{
            setKey(r?.key);    
        })
    },[])

    return(
        <main>
            <div className="main new-key">
                <h2>Your New Key Is..</h2>
                <input value={key}/>
            </div>
        </main>
    )
}