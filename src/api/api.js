import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f1457b35-9716-4ddf-b1b1-915b327a9f20"
    }
});

export const usersAPI = {
    getUsers(currentPage =1,pageSize =10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const getUsers2 = (currentPage =1,pageSize =10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}
