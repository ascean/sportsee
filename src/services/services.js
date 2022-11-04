import {API_URL} from "../config"
import axios from 'axios';

export async function getUserInfos(userId) {
    const response = await axios.get(`${API_URL}/${userId}`)
    return response.data.data
}
export async function getUserActivity(userId) {
    const response = await axios.get(`${API_URL}/${userId}/activity`)
    return response.data.data
}
export async function getUserSession(userId) {
    const response = await axios.get(`${API_URL}/${userId}/average-sessions`)
    return response.data.data
}
export async function getUserPerformance(userId) {
    const response = await axios.get(`${API_URL}/${userId}/performance`)
    return response.data.data
}

