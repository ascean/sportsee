import { API_URL } from "../config";
import axios from "axios";

/**
 * Get datas from USER_MAIN_DATA with specific userId
 * @param {Integer} userId user code
 * @returns {Object}
 */
export async function getUserInfos(userId) {
    try {
        const url = `${API_URL}/user/${userId}`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        return null
    }
}

/**
 * Get datas from USER_ACTIVITY with specific userId
 * @param {Integer} userId user code
 * @returns {Object}
 */
export async function getUserActivity(userId) {
    try {
        const url = `${API_URL}/user/${userId}/activity`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        return null
    }
}

/**
 * Get datas from USER_AVERAGE_SESSIONS with specific userId
 * @param {Integer} userId user code
 * @returns {Object}
 */
export async function getUserSession(userId) {
    try {
        const url = `${API_URL}/user/${userId}/average-sessions`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        return null
    }
}

/**
 * Get datas from USER_PERFORMANCE with specific userId
 * @param {Integer} userId user code
 * @returns {Object}
 */
export async function getUserPerformance(userId) {
    try {
        const url = `${API_URL}/user/${userId}/performance`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        return null
    }
}
