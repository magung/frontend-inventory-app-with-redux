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
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false
            }
        case 'GET_CATEGORIES_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
            }
        case 'GET_CATEGORIES_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                categories: action.payload.data.data
            }
        default:
                return state
    }
}
export default category