import React from "react";

const VideoCard = ({ info }) => {
    
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            <img className="rounded-lg" alt="thumnail" src={thumbnails.medium.url}/>
            <ul className="font-bold py-2">
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
};

export default VideoCard;