import Axios from 'axios'
const token = localStorage.getItem("token")
Axios.defaults.baseURL = 'http://localhost:8080';
// Axios.defaults.baseURL = 'http://192.168.1.4:8080'
export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: Axios.get('/categories/?limit=100')
    }
}

export const addCategory = (data) => {
  return {
      type: 'ADD_CATEGORY',
      payload: Axios.post('/categories', data, {
          headers:{
              Authorization: token
          }
      })
  }
}

export const updateCategory = (id, data) => {
  return{
      type: 'UPDATE_CATEGORY',
      payload: Axios.patch(`/categories/` + id, data, {
          headers:{
            authorization: token
          }
      })
  }
}
export const deleteCategory = (id) => {
  return{
    type: 'DELETE_CATEGORY',
    payload: Axios.delete(`/categories/${id}`, {
      headers: {
        Authorization : token
      }
    })
  }
}
