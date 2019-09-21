import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost:8080';
// Axios.defaults.baseURL = 'http://192.168.1.4:8080';
export const login = (data) => {
    return {
        type:'LOGIN',
        payload: Axios.post(`/user/login`, data)
    }
}

export const register = (data) => {
    return {
      type:'REGISTER',
      payload: Axios.post(`/user/register`, data)
    }
}
export const getProfile = () => {
    return {
      type:'GET_PROFILE',
      payload: Axios.get(`/user/profile`,{
          headers:{
            Authorization : window.localStorage.getItem("token")
          }
        }
      )
    }
}
export const logout = () => {
    return {
        type:'USER_LOGOUT',
    }
}
