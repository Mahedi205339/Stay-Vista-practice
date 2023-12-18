import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";

const GuestMenu = () => {
    return (
        <>
            <MenuItem icon={MdHomeWork} label='My Bookings' address='my-bookings'/>
        </>
    );
};

export default GuestMenu;