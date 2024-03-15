import React from "react";
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

//Either Main Container or Watch page will be diplayed so 
// using outlet to achieve this, The childrens of appRouter goes where Outlet is

const Body = () =>{
    return(
        <div className="flex">
          <Sidebar/>
          <Outlet/>
        </div>
        
    )
}

export default Body;