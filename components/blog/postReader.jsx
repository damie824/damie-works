'use client'

import dynamic from "next/dynamic";
import '@toast-ui/editor/dist/toastui-editor.css';

const DynamicViewer = dynamic(() => import("@/components/global/mdViewer"), {ssr : false});

export default function PostReader({value}) {
    return(
        <DynamicViewer
            initialValue={value}
        />
    )
}