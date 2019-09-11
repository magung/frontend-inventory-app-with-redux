const initState = {
    userProfile: undefined,
    errMessage:'',
    message:'',
    isLoading:false,
    isRejected:false,
    isFulfilled:false,
  }
  const user = (state = initState, action)=>{
    switch(action.type){
      case 'LOGIN_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        }
      case 'LOGIN_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
          errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message
        }
      case 'LOGIN_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
        }
      case 'REGISTER_PENDING':
        return{
          ...state,
          isLoading:true,
          isRejected:false,
          isFulfilled:false,
        }
      case 'REGISTER_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
          errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message
        }
      case 'REGISTER_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
        }
      case 'GET_PROFILE_REJECTED':
        return{
          ...state,
          isLoading:false,
          isRejected:true,
          errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message
        }
      case 'GET_PROFILE_FULFILLED':
        return{
          ...state,
          isLoading:false,
          isFulfilled:true,
          userProfile: action.payload.data.data
        }
        default:
        return state
    }
  }
  export default user
