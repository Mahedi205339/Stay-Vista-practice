import { MdAddHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from "react-icons/bs";

const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsFillHouseAddFill}
                label='Add Room'
                address='/dashboard/add-room'
            />
            <MenuItem
                icon={MdAddHomeWork}
                label='My Listings'
                address='/dashboard/my-listing'
            />
        </>
    );
};

export default HostMenu;