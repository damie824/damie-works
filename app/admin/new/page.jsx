import GeneratKey from "@/components/admin/generateKey";
import "@/style/admin/new-key.scss"

export default function NewKey() {
    return(<GeneratKey api={process.env.APISECRET}/>)
}