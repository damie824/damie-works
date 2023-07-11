'use client'

import { useRouter } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi"; 
import "@/style/blog/searchbar.scss";

export default function SearchBar(props) {

    const router = useRouter();
    
    return(
        <div className={"search-bar "+props.className}>
            <form onSubmit={(e)=>{
                e.preventDefault();
                router.push("/blog/search/"+e.target.param.value);
            }}>
                <input name="param" placeholder="검색할 단어를 입력해 주세요!"/>
                <button type="submit">
                    <BiSearchAlt/>
                </button>
            </form>
        </div>
    )
}