import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]"; 
import PermissionErr from "@/components/error/permsission";

export default async function AdminLayout({children}) {
    let session = await getServerSession(authOptions);

    if(!session) {
        return <PermissionErr/>
    }

    return children
}

export const metadata = {
    title: "Admin - Damie",
    description : "어드민 페이지입니다. 접근이 금지되었습니다.",
    robots : "noindex, nofollow",
    viewport : "width=device-width, initial-scale=1.0",
    charset : "utf-8",
    author : "Damie",
    openGraph: {
        images:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trendcentral.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fnever-gonna-give-you-up.jpg&f=1&nofb=1&ipt=824eaae6faeed063a35c398783acee390bdee56e8cf6d476d5d3e92fb7dedbfb&ipo=images",
        title : "Admin - Damie",
        description : "어드민 페이지입니다. 접근이 금지되었습니다."
    },
}