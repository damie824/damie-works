import Link from "next/link";

export default function Footer(){
    let date = new Date();
    let year = date.getFullYear()
    return(
        <div className="footer">
            <p>©2022 - {year} <Link href='/'>Damie.</Link></p>
        </div>
    )
}
