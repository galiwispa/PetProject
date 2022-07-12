import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a9ff8f93-e32a-4fdc-9f61-e5309101f05d"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile (userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

