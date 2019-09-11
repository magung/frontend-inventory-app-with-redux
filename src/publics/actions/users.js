import Axios from 'axios'

export const login = (data) => {
    return {
        type:'LOGIN',
        payload: Axios.post(`http://localhost:8080/user/login`, data)
    }
}

export const register = (data) => {
    return {
      type:'REGISTER',
      payload: Axios.post(`http://localhost:8080/user/register`, data)
    }
}
export const getProfile = () => {
    return {
      type:'GET_PROFILE',
      payload: Axios.get(`http://localhost:8080/user/profile`,{
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