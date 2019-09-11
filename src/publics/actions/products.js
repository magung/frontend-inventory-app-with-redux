import Axios from 'axios';
const token = localStorage.getItem("token")
// export const getProducts = (dataSource = `http://localhost:8080/products/`, page = 1, sortBy = null, search = null, sort = null) => {
//     let url = `${dataSource}/?page=${page}`
//     if(sortBy !== null)
//       url += `&sortBy=${sortBy}`
//     if(search !== null )
//       url += `&search=${search}`
//     if(sort !== null )
//       url += `&sort=${sort}`
//     return {
//       type:'GET_PRODUCTS',
//       payload: Axios.get(url)
//     }
//   }


export const getProducts =  (query) => {
  const {search , sortBy, sort, page, limit } = query
  return {
    type:'GET_PRODUCTS',
    payload: Axios.get(`http://localhost:8080/products/?search=${search}&sortBy=${sortBy}&sort=${sort}&page=${page}&limit=${limit}`)
  }
}

export const addProduct = (data) => {
  return {
      type: 'ADD_PRODUCT',
      payload: Axios.post('http://localhost:8080/products', data, {
          headers:{
              Authorization: token
          }
      })
  }
}

export const getProductById = (id) => {
  return {
      type: 'GET_PRODUCT_BY_ID',
      payload: Axios.get(`http://localhost:8080/products/` + id)
  }
}
export const updateProduct = (id_product, data) => {
  return{
      type: 'UPDATE_PRODUCT',
      payload: Axios.patch(`http://localhost:8080/products/update/` + id_product, data, {
          headers:{
            authorization: token
          }
      })
  }
}
export const deleteProduct = (id_product) => {
  return{
    type: 'DELETE_PRODUCT',
    payload: Axios.delete(`http://localhost:8080/products/${id_product}`, {
      headers: {
        Authorization : token
      }
    })
  }
}
export const addQty = (id_product) => {
  return {
    type: 'ADD_QTY_PRODUCT',
    payload: Axios.patch(`http://localhost:8080/products/${id_product}?act=add`)
  }
}
export const reduceQty = (id_product) => {
  return {
    type: 'REDUCE_QTY_PRODUCT',
    payload: Axios.patch(`http://localhost:8080/products/${id_product}?act=reduce`)
  }
}

export const sendQuery = data => {
	return {
		type: 'SEND_QUERY',
		payload: data
	}
}