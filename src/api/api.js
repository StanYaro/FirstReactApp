import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "15b373c0-4f39-46f1-9a43-01306f8c715e"
    }
});

export const usersAPI = {
    getUsers(currentPage =1,pageSize =10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}
// later add api for follow/unfolow
// export const followAPI = (currentPage =1,pageSize =10) => {
//     return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data);
// }
