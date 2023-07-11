import Link from "next/link";
import "@/style/blog/preview.scss"

export default function PostPreview(props) {
    return(
        <Link key={props.key} className="preview-body" href={'/blog/post/'+props.id}>
            <p className="preview-emoji">
                {props.emoji}
            </p>
            <div className="preview">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <img src={props.thumbnail}/>
            </div>
        </Link>
    )
}