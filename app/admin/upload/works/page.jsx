import WorkUpload from "@/components/admin/works";

export default function WorkUploader() {
    return (
        <WorkUpload apikey={process.env.APISECRET}/>
    )
}