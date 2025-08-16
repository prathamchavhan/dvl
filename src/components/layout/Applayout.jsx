import Headers from "../ui/Headers";  

import Footers  from "../ui/Footers"; 

import {Outlet} from "react-router-dom";


export const Applayout =()=>{
    return (
    <>
   
    <Headers/>|
     <Outlet />
    <Footers/>
    </>
    );
};