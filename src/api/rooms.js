import axiosSecure from "."

//fetch all rooms for host 
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data
}

//get rooms for host 
export const getHostRoom = async (email) => {
    const { data } = await axiosSecure(`/rooms/${email}`)
    return data
}

export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data
}

// save room data in db 
export const addRoom = async roomData => {
    const { data } = await axiosSecure.post(`/rooms`,
        roomData)
    return data
}
export const updateRoom = async (roomData, id) => {
    const { data } = await axiosSecure.put(`/update-room/${id}`,
        roomData)
    return data
}
