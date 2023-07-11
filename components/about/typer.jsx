'use client'
import TypewriterComponent from "typewriter-effect";

export default function TypeWriter(props){
    return(
        <TypewriterComponent
            options={
                {
                    strings : props.strings,
                    autoStart : true,
                    loop : true
                }
            }
        />
    )
}