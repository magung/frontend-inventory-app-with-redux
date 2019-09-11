import {combineReducers} from 'redux'

import user from './users'
import product from './products'
import category from './categories'

const rootReducer = combineReducers({
    category,
    product,
    user
})

// const rootReducer = (state, action) => {
//     if (action.type === 'USER_LOGOUT') {
//         state = undefined
//     }
// return appReducer(state, action)
// }

export default rootReducer