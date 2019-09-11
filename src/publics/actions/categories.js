import Axios from 'axios'

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: Axios.get('http://localhost:8080/categories')
    }
}
