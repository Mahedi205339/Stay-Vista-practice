import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
import Loader from '../components/Shared/Loader';

const HostRoute = ({ children }) => {
    const [role, isLoading] = useRole()
    if (isLoading) return <Loader />
    if (role === 'host') return children

    return <Navigate to='/dashboard'   />

};

export default HostRoute;