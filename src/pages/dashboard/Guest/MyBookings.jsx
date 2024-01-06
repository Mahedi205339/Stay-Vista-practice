
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../../components/Loader/Loader'
import useAuth from '../../../hooks/useAuth'
import { getBookings } from '../../../api/bookings'
import TableRow from '../../../components/Dashboard/Sidebar/TableRow'
import toast from 'react-hot-toast'
import axiosSecure from '../../../api'

const MyBookings = ({ bookingInfo }) => {
    const { user, loading } = useAuth()
    const {
        data: bookings = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => await getBookings(user?.email),
    })
    // console.log(bookings);
    const handleCancelBooking = id => {
        axiosSecure.delete(`/booking/${id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    toast.success('booking canceled')

                    console.log(bookingInfo);
                }
                refetch()
            })
    }

    if (isLoading) return <Loader />
    return (
        <>
            <Helmet>
                <title>My Bookings</title>
            </Helmet>

            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Info
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            From
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            To
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Table Row Data */}
                                    {bookings &&
                                        bookings.map(booking => (
                                            <TableRow
                                                handleCancelBooking={handleCancelBooking}
                                                key={booking._id}
                                                booking={booking} />
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBookings