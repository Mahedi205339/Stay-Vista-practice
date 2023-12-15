import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* sidebar component */}
            <Sidebar></Sidebar>
            <div className="flex-1 md:ml-64">
                <div>
                    {/* outlet dynamic components */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;