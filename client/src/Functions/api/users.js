import axios from 'axios'
require('dotenv').config()
const BACK_SERVER = process.env.REACT_APP_BACK_SERVER || "http://localhost:3010"

export async function getAllUserApi() {
    try {
        const allUsers = await axios.get(`${BACK_SERVER}/users/AllUsers`)
        
        return allUsers.data
    } catch (err) {
        throw err
    }
}
