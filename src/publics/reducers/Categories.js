const initState = {
    categories:[],
    errMessage:'',
    message:'',
    isLoading:false,
    isRejected:false,
    isFulfilled:false
}
const category = (state = initState, action) => {
    switch(action.type){
        case 'GET_CATEGORIES_PENDING':
        case 'ADD_CATEGORY_PENDING':
        case 'UPDATE_CATEGORY_PENDING':
        case 'DELETE_CATEGORY_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false
            }
        case 'GET_CATEGORIES_REJECTED':
        case 'ADD_CATEGORY_REJECTED':
        case 'UPDATE_CATEGORY_REJECTED':
        case 'DELETE_PRODUCT_REJECTED':
                return{
                  ...state,
                  isLoading:false,
                  isRejected:true,
                  errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message
                }
        case 'GET_CATEGORIES_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                categories: action.payload.data.data
            }
        case 'ADD_CATEGORY_FULFILLED':
            state.categories.unshift(action.payload.data.data)
            return{
                ...state,
                isLoading:false,
                isFulfilled:true
            }
        case 'UPDATE_CATEGORY_FULFILLED':
            //const newProductData = action.payload.data.data[0]
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                categories: state.categories.map((category) => {
                    return category.id === action.payload.data.data.id ? action.payload.data.datax : category
                })
            }

        case 'DELETE_PRODUCT_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                categories: state.categories.filter((category) => {
                    return category.id !== action.payload.data.data.id
                })
            }
        default:
                return state
    }
}
export default category
