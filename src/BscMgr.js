import React,{useState}from "react";

function BscMgr(){
    const[arr,setArr] = useState(["张三分1",'tim1','json1','里达琳1']);
    return (
        <ul>
            {
                arr.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
    )
}

export default BscMgr