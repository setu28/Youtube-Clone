import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { makeRandomMessage } from "../utils/helper";



const LiveChat = () =>{
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatmessages = useSelector((store) => store.chat.messages);


    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("API CALLING");
            dispatch(
                addMessage({
                    name: "Setu Narayan",
                    message: makeRandomMessage(5),
                })
            )
        },2000);
        return () => clearInterval(i);
    },[]);
    return(
        <>
            <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
               <div>
                    {chatmessages.map((c,i)=>(
                    <ChatMessage key={i} name={c.name} message={c.message} />
                    ))}
                </div>
            </div>
            <form className="w-full p-2 ml-2 border border-black" 
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(
                    addMessage({
                        name: "Setu Narayan",
                        
                    })
                )
            }}>
                <input 
                className="px-2 w-96" 
                type="text" 
                value={liveMessage} 
                onChange={(e)=>{
                    setLiveMessage(e.target.value);
                }}/>
                <button className="px-2 mx-2 bg-green-100">Submit</button>

            </form>
        </>
    )
};

export default LiveChat;