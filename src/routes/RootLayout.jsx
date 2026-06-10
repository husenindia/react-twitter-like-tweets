import { Outlet } from "react-router-dom";
import MainHeader from '../componets/main-header/MainHeader'

function RouteLayout() {
    return (
        <>
            <MainHeader></MainHeader>
            <Outlet></Outlet>
        </>
    )
}
export default RouteLayout;
