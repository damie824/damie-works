'use client'

import { useEffect, useState } from "react";

export default function GeneratKey(props) {
    const [key, setKey] = useState("");

    useEffect(()=>{
        fetch('/api/admin/generate-key', {
            method: 'POST',
            headers : {
                apikey : props.api
            }
        })
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
                <input value={key} disabled/>
            </div>
        </main>
    )
}