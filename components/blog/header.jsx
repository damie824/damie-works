'use client'

import "@/style/blog/header.scss"
import Link from "next/link"
import SearchBar from "./search"

export default function BlogHeader() {
    return (
        <div className="blog-header">
            <Link href='/blog' className="logo">
                <h2>Damie.log</h2>
            </Link>
            <SearchBar className="header-searchbar"/>
        </div>
    )
}