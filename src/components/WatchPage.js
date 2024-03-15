import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () =>{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])

    return(
        <div className="flex flex-col w-full">
            <div className="px-5 flex">
                <div>
                    <iframe 
                        width="1050" 
                        height="550" 
                        src={"https://www.youtube.com/embed/3" + searchParams.get("v")}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                    </iframe>
                </div>
                <div className="w-full">
                   <LiveChat/>
                </div>
            </div>
           <CommentsContainer/>

        </div>
    )
}

export default WatchPage;