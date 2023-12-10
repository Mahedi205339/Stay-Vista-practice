import axiosSecure from "."

//save user data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified'
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}
//Get token from server
export const getToken = async email => {
    const { data } = await axiosSecure.post(`/jwt`, email)
    console.log(data);
    return data
}