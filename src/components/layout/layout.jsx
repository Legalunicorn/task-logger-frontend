import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
        <Header/>
        <main id="main">
            <Outlet/>
        </main>
        <p>Footer</p>
        </>
    );
}
 
export default Layout;