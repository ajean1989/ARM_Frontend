import React from 'react';
import Link from 'next/link'


const navBtn = (props) => {
    try{

        return (
            <button><Link href={`https://${props.dns}/${props.uri}`}>props.uri</Link></button>
        )
    }
    catch(e) {console.log("ERR >>> ",e)};
};




export default navBtn;
