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
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)            
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);            
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);            
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId); 
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status}); 
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
