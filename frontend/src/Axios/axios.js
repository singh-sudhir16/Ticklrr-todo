import axios from "axios"
const instance = axios.create({
    baseURL:"https://sudhir-ticklrr-todo.netlify.app/"
})
export default instance