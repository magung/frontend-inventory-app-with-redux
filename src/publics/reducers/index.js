import {combineReducers} from 'redux'

import user from './Users'
import product from './Products'
import category from './Categories'

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
