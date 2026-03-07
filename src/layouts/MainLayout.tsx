import {Header} from "../component/appHeader/Header.tsx";
import Footer from "../component/appFooter/Footer.tsx";
import {Outlet} from "react-router-dom";
const MainLayout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )

}

export default MainLayout;