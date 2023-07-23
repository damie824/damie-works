'use client'

import dynamic from 'next/dynamic';
import { useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@/style/admin/upload.scss'

const DynamicEditor = dynamic(() => import("@/components/admin/editor"), {ssr : false});
export default function PostUpload(props) {
    const [contents, setContents] = useState("");

    function OnSubmit() {
        let titleValue = document.getElementById('title').value;
        let titleSplit = titleValue.split(' ');
        let title = titleValue.substring(titleSplit[0].length+1);
        let emoji = titleSplit[0];
        let tags = document.getElementById('tags').value;
        let thumbnail = document.getElementById('title').value;

        let date = new Date;

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let nowDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        fetch("/api/admin/new-post", {
            method : "POST",
            headers : {
                apikey : props.apikey
            },
            body : JSON.stringify({
                title : title,
                date : nowDate,
                emoji : emoji,
                thumbnail : thumbnail,
                hashtags : tags,
                content : contents
            })
        })
    }

    return(
        <main>
            <div className="main">
                <div className='upload-title'>
                    <div className='upload-input-container'>
                        <input id='title' placeholder='제목을 입력해주세요. 첫 단어는 이모지여야 합니다.'/>
                        <div></div>
                        <input id='tags' placeholder='태그를 입력해주세요. 스페이스로 구분합니다.'/> 
                        <input id='thumbnail' placeholder='썸네일 이미지의 주소를 입력해주세요.'/> 
                    </div>
                    <button onClick={OnSubmit}>Upload</button>
                </div>
                <DynamicEditor
                    initialValue={'당신의 이야기를 적어보세요!'}
                    height="80vh"
                    onChange={(e)=>{
                        setContents(e);
                    }}
                />
            </div>
        </main>
    )
}