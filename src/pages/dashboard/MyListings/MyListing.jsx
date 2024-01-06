// import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'

import { getHostRoom } from '../../../api/rooms'
import RoomDataRow from '../../../components/Dashboard/TableRows/RoomDataRows'
import Swal from 'sweetalert2'
import axiosSecure from '../../../api'
import { useQuery } from '@tanstack/react-query'
// import toast from 'react-hot-toast'

const MyListing = () => {
  const { user } = useAuth()
  // const [rooms, setRooms] = useState([])
  // useEffect(() => {
  //   getHostRoom(user?.email).then(data => setRooms(data))
  // }, [user])

  const { data: rooms = [], refetch } = useQuery({
    queryKey: ['rooms'],
    queryFn: async () => await getHostRoom(user?.email),

  })
  const handleDelete = id => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete"
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/rooms/${id}`)
        // console.log(res.data)
        refetch()
        Swal.fire({
          title: "Delete!",
          text: "Room is deleted.",
          icon: "success",
          timer: 1500
        });
      }
    })
  }

  // const handleUpdateRoom = id => {
  //   axiosSecure.put(`/rooms/${id}`)
  //     .then(res => {
  //       console.log(res.data)
  //       if (res.data.modifiedCount > 0) {
  //         refetch()
  //         toast.success('task added to todo')
  //       }
  //     })

  // }



  return (
    <>
      <Helmet>
        <title>My Listings | Dashboard</title>
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
                      Location
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
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {rooms.map(room => (
                    <RoomDataRow
                      // handleUpdateRoom={handleUpdateRoom}
                      handleDelete={handleDelete}
                      refetch={refetch}
                      key={room._id} room={room} />
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

export default MyListing