'use client'

import '@/style/admin/upload.scss'
import { useRouter } from 'next/navigation';

export default function PostUpload() {

    let router = useRouter();

    function onSubmit() {
        let title = document.getElementById('title').value;
        let date = new Date;
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        let uploadDate = `${year}-${month}-${day}`
        let link = document.getElementById('link').value;
        let category = document.getElementById('category').value;
        let thumbnail = document.getElementById('thumbnail').value;
        let content = document.getElementById('content').value;
        let desc = content.substring(0, 10) + ".."

        fetch("/api/admin/new-work", {
            method : "POST",
            body : JSON.stringify({
                title : title,
                uploadDate : uploadDate,
                Link : link,
                category : category,
                desc : desc,
                thumbnail : thumbnail,
                content : content
            })
        })
        .then((r)=>{
            if(r.ok) {
                router.push('/works');
            }
            else {
                alert("작품 등록에 실패하였습니다.")
                console.error(r.json.log)
            }
        })
    }

    return(
        <main>
            <div className="main">
                <div className='upload-title'>
                    <div className='upload-input-container'>
                        <input id="title" placeholder='제목을 입력해주세요'/>
                        <div></div>
                        <input id="category" placeholder='카테고리를 입력해주세요.'/> 
                        <div></div>
                        <input id="thumbnail" placeholder='썸네일 주소를 입력해주세요.'/> 
                        <div></div>
                        <input id="link" placeholder='해당 프로젝트의 링크를 입력해주세요.'/> 
                    </div>
                    <button onClick={onSubmit}>Upload</button>
                </div>
                <div className='portfolio-contents'>
                    <textarea id="content" placeholder='내용을 입력해주세요'/>
                </div>
            </div>
        </main>
    )
}