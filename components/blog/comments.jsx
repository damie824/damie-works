'use client'

import { createRef, useEffect } from "react"
import "@/style/blog/comments.scss";

export default function UseComment() {

    const ref = createRef()

    const utterancSettings = {
        src : "https://utteranc.es/client.js",
        repo : "damie824/damie-works-comments",
        issueterm : "pathname",
        label : "Comments",
        theme : "github-dark",
        crossorigin : "anonymous",
    }

    useEffect(() => {
      const utterances = document.createElement("script")
      Object.entries(utterancSettings).forEach(([key, value]) => {
        if(key == 'issueterm'){
            utterances.setAttribute('issue-term', value)
        }
        else {
            utterances.setAttribute(key, value)
        }
      })
      ref.current.appendChild(utterances)
    }, [])
  
    return <div id="utteranc-comments" ref={ref}></div>
};
