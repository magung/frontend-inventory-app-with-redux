import Axios from 'axios';
const token = localStorage.getItem("token")
 Axios.defaults.baseURL = 'http://localhost:8080';
// Axios.defaults.baseURL = 'http://192.168.1.4:8080';
export const getProducts =  (query) => {
  const {search , sortBy, sort, page, limit } = query
  return {
    type:'GET_PRODUCTS',
    payload: Axios.get(`/products/?search=${search}&sortBy=${sortBy}&sort=${sort}&page=${page}&limit=${limit}`)
  }
}

export const addProduct = (data) => {
  return {
      type: 'ADD_PRODUCT',
      payload: Axios.post('/products', data, {
          headers:{
              Authorization: token
          }
      })
  }
}

export const getProductById = (id) => {
  return {
      type: 'GET_PRODUCT_BY_ID',
      payload: Axios.get(`/products/` + id)
  }
}
export const updateProduct = (id_product, data) => {
  return{
      type: 'UPDATE_PRODUCT',
      payload: Axios.patch(`/products/update/` + id_product, data, {
          headers:{
            authorization: token
          }
      })
  }
}
export const deleteProduct = (id_product) => {
  return{
    type: 'DELETE_PRODUCT',
    payload: Axios.delete(`/products/${id_product}`, {
      headers: {
        Authorization : token
      }
    })
  }
}
export const addQty = (id_product) => {
  return {
    type: 'ADD_QTY_PRODUCT',
    payload: Axios.patch(`/products/${id_product}?act=add`)
  }
}
export const reduceQty = (id_product) => {
  return {
    type: 'REDUCE_QTY_PRODUCT',
    payload: Axios.patch(`/products/${id_product}?act=reduce`)
  }
}

export const sendQuery = data => {
	return {
		type: 'SEND_QUERY',
		payload: data
	}
}
