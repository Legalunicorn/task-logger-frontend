import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss"

const Layout = () => {
    return (
        <>
        <Header/>
        <main id="main">
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}
 
export default Layout;