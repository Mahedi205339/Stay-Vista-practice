import MenuItem from "./MenuItem";
import { FaUsersCog } from "react-icons/fa";

const AdminMenu = () => {
    return (
        <>
        <MenuItem icon={FaUsersCog} label='Manage Users' address='manage-users'/>
        </>
    );
};

export default AdminMenu;