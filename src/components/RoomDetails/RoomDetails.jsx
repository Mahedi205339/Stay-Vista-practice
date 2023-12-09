import { useParams } from "react-router-dom";
import Container from "../Shared/Container";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState([])
    useEffect(() => {
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
            })
    }, [id])


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