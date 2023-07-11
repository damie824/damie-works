function Post(props) {
    return(
        <Link href='/' className="blog-post">
            <p className="emoji">{props.emoji}</p>
            <div className="blog-post-info">
                <p>{props.title}</p>
                <p>{props.date}</p>
            </div>
        </Link>
    )
}