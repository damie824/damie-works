'use client'

import { useState } from "react"

export default function LikeButton(props) {
    let [like, setLike] = useState(props.like)

    function clickLike() {
        fetch("/api/blog/like", {
            method: 'POST',
            headers : {
                apikey : props.apikey
            },
            body: JSON.stringify({
                id : props.id
            })
        }).then((r)=>{
            if(r.ok){
                setLike(like + 1);
            };
        });
    }

    return(
        <button onClick={clickLike} className="like">{like}
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
            </svg>
        </button>
    )
}