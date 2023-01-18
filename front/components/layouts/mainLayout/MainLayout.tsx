import React from "react";
import Footer from "../../footer/Footer";
import NavBar from "../../navbar/NavBar";

export interface MainLayoutProps{
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children})=>{
    return (
        <>
            <NavBar/>
                <main className="mainlayout-main">{children}</main>
            <Footer/>
        </>
    )
}

export default MainLayout;