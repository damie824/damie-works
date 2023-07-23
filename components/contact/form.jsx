'use client'

export default function ContactForm(props) {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            fetch("/api/contact/send", {
                method : "POST",
                headers : {
                    apikey : props.apikey
                },
                body : JSON.stringify({
                    title : e.target.title.value,
                    username : e.target.username.value,
                    email : e.target.email.value,
                    content : e.target.content.value
                })
            }).then((r)=>{
                if(r.ok){
                    document.getElementById('form').style.display='none'
                    document.getElementById('done').style.display='flex'
                }
            })
        }} className="contact-form">
            <div className="contact-title">
                <input name="username" type="text" placeholder="이름을 입력해 주세요!" required/>
                <input name="email" type="email" placeholder="이메일을 입력해 주세요!" required/>
            </div>
            <input name="title" placeholder="제목을 입력해주세요!" required/>
            <textarea name="content" placeholder="문의하실 내용을 입력해주세요!" required/>
            <button type="submit">전송</button>
        </form>
    )
}