import { LOGIN, LOGOUT } from '../../Types/types'


export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                logget: action.payload
            }

        case LOGOUT:
            return{
                ...state,
                logget: action.payload
            }
    
        default:
            return state;
    }

}
