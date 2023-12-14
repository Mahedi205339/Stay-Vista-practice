import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Headings from "../Headings/Headings";
import Loader from "../Loader/Loader";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(false)
        getAllRooms( )
            .then(data => {

                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                } else setRooms(data)


            })
    }, [category])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <Container>
            {
                rooms && rooms.length > 0 ?
                    < div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-4 md:pt-6 lg:pt-10" >

                        {
                            rooms?.map(room => <Card key={room._id} room={room}
                            ></Card>)
                        }
                    </div >
                    :
                    <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                        <Headings center={true}
                            title={"No Rooms Available In This Category"}
                            subtitle={"Please select other category"}
                        ></Headings>
                    </div>

            }


        </Container>
    );
};

export default Rooms;