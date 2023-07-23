import PostUpload from "@/components/admin/post";

export default function PostEditor() {
    return(
        <PostUpload apikey={process.env.APISECRET}/>
    )
}