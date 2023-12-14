import { useLoaderData } from "react-router-dom";
import Container from "../Shared/Container";
import { Helmet } from "react-helmet";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
    const room = useLoaderData()
    console.log(room);

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <Header room={room}></Header>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7">
                    <RoomInfo room={room}></RoomInfo>
                    {/* calender  */}

                    <div className="md:col-span-3 order-first md:order-last">
                        {/* Room reservation  */}
                        <RoomReservation room={room}></RoomReservation>
                    </div>

                </div>
            </div>

        </Container>
    );
};

export default RoomDetails;