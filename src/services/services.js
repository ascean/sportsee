import {API_URL} from "../config"
import axios from 'axios';

/**
 * Get datas from USER_MAIN_DATA with specific userId
 * @param {Integer} userId 
 * @returns Object
 */
export async function getUserInfos(userId) {
    const response = await axios.get(`${API_URL}/${userId}`)
    return response.data.data
}

/**
 * Get datas from USER_ACTIVITY with specific userId
 * @param {Integer} userId 
 * @returns Object
 */
export async function getUserActivity(userId) {
    const response = await axios.get(`${API_URL}/${userId}/activity`)
    return response.data.data
}

/**
 * Get datas from USER_AVERAGE_SESSIONS with specific userId
 * @param {Integer} userId 
 * @returns Object
 */
export async function getUserSession(userId) {
    const response = await axios.get(`${API_URL}/${userId}/average-sessions`)
    return response.data.data
}

/**
 * Get datas from USER_PERFORMANCE with specific userId
 * @param {Integer} userId 
 * @returns Object
 */
export async function getUserPerformance(userId) {
    const response = await axios.get(`${API_URL}/${userId}/performance`)
    return response.data.data
}

