import { Outlet } from "react-router-dom";
import Headers from "./Header";
import Footers from "./Footer";

export default function Masters(){
    return(
        <>
        <Headers/>
        <Outlet/>
        <Footers/>        
        </>
    )
}