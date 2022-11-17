import datasUser from "../assets/datas/data";

/**
 * Get datas from USER_MAIN_DATA in mock json file with specific userId
 * @param {Integer} userId user code
 * @returns {Object} 
 */
export function getUserInfosByMock(userId) {
    const datas = datasUser.USER_MAIN_DATA
        .filter((element) => element.id === userId)
        .shift();
    return datas;
}

/**
 * Get datas from USER_ACTIVITY in mock json file  with specific userId
 * @param {Integer} userId user code
 * @returns {Object}
 */
export function getUserActivityByMock(userId) {
    const datas = datasUser.USER_ACTIVITY
        .filter((element) => element.userId === userId)
        .shift();
    return datas;
}

/**
 * Get datas from USER_AVERAGE_SESSIONS in mock json file  with specific userId
 * @param {Integer} userId user code
 * @returns {Object}
 */
export function getUserSessionByMock(userId) {
    const datas = datasUser.USER_AVERAGE_SESSIONS
        .filter((element) => element.userId === userId)
        .shift();
    return datas;
}

/**
 * Get datas from USER_PERFORMANCE in mock json file  with specific userId
 * @param {Integer} userId user code
 * @returns {Object}
 */
export function getUserPerformanceByMock(userId) {
    const datas = datasUser.USER_PERFORMANCE
        .filter((element) => element.userId === userId)
        .shift();
    return datas;
}
