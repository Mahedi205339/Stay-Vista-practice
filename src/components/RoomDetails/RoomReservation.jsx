import Calender from "./Calender";

const RoomReservation = ({ room }) => {
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    ${room?.price}
                </div>
                <div className="text-2xl text-neutral-600">/ night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender />
            </div>
            
        </div>
    );
};

export default RoomReservation;