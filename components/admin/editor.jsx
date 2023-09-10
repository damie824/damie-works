"use client";

import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import "@/style/admin/editor.scss";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/chart/dist/toastui-chart.css";

export default function FormEditor({ initialValue, onChange, height }) {
  const editorRef = useRef(null);

  function handleChange() {
    const md = editorRef?.current
      ? editorRef?.current.getInstance().getMarkdown()
      : "";
    onChange(md);
  }

  return (
    <div className='editor'>
      <Editor
        theme='light'
        height={height}
        initialEditType='markdown'
        initialValue={initialValue}
        onChange={handleChange}
        previewStyle='tab'
        ref={editorRef}
        useCommandShortcut={true}
        viewer={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </div>
  );
}
