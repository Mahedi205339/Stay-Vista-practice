import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";

const RoomDetails = () => {

    const { id } = useParams()

    return (
        <Container>
            {id}
        </Container>
    );
};

export default RoomDetails;