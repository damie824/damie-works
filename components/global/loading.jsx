export default function Loading() {
    return(
        <div className="loading">
            <video autoPlay loop muted>
                <source src="/loading.webm"/>
            </video>
        </div>
    )
}