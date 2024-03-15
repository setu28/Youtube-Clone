import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () =>{

    const [videos, setvideos] = useState([]);
    
    useEffect(()=>{
        getvideos();

    }, []);

    const getvideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setvideos(json.items);
    }


    return(
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link to={"/watch?v="+ video.id}>
                <VideoCard key={video.id} info={video} /> </Link>
            ))}
            
            
        </div>
    )
}

export default VideoContainer;