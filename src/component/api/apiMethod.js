import axios from "../config/endpoint";

const findAll = () => {
    return axios.get("/users/userandcust")
}

const createUserandCust = (data) => {
    return axios.post("/users/createUserandCust",data)
}

const getById = (id) => {
    return axios.get(`/users/${id}`)
}

const updateUserandCust = (data) => {
    return axios.patch(`/users/updateUserandCust/${data.user_id}`,data)
}
const deleteUserandCust = (data) => {
    // console.log(data)
    return axios.delete(`/users/deleteUser/${data}`)
}

export default {
    findAll,
    createUserandCust,
    getById,
    updateUserandCust,
    deleteUserandCust
}