import Header from "../components/header/header.jsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout;
