import React from "react";

const ChatMessage = ({ name, message }) =>{
    return(
        <div className="flex items-center shadow-sm p-0.5">
                <img
                   className="h-12"
                   alt="user"
                   src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
                />
            <span className="font-bold px-1">{name}</span>
            <span>{message}</span>

        </div>
    )
};

export default ChatMessage;