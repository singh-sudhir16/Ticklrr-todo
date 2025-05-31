import axios from "axios"
const instance = axios.create({
    baseURL:"https://ticklrr-todo.onrender.com/api"
})
export default instance