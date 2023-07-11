'use client'

import { Viewer } from "@toast-ui/react-editor";
import { useRef } from "react";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism  from 'prismjs';
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@/style/admin/editor.scss"
import "@toast-ui/editor/dist/toastui-editor.css";
import '@toast-ui/chart/dist/toastui-chart.css';

export default function FormEditor({ initialValue }) {
    const viewerRef = useRef(null);

    return (
        <div className="viewer">
            <Viewer
                theme={'dark'}
                ref={viewerRef}
                initialValue={initialValue}
                plugins={[[codeSyntaxHighlightPlugin, { highlighter: Prism }]]}
            />
        </div>
    );
}