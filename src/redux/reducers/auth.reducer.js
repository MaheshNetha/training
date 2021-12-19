import { actionTypes } from '../actionTypes'
import { initialState } from '../state'

let user = (localStorage.getItem('user') )? JSON.parse(localStorage.getItem('user') ) : '';

const init = user ? 

{
  
   globalmessage: '',
  isLoggedIn: true,
  tokenType: user?.token_type,
  role: user?.user_role,
  accessToken: user?.access_token,
  currentUser: user?.user,
  tokenExpiresAt:user?.expires,
  expiresIn : user?.expires_in,

}
 :
 {
  globalmessage: '',
  isLoggedIn: false,
  role: '',
  accessToken: '',
  currentUser:{},
  expiresIn:'',
  tokenExpiresAt:'',
  tokenType:''
} 
;


 function authentication(state = init, action) {

  if(action.type === actionTypes.LOGIN_REQUEST || 
     action.type === actionTypes.LOGIN_SUCCESS || 
     action.type === actionTypes.LOGIN_FAILURE ||
     action.type === actionTypes.LOGOUT ||
     action.type === actionTypes.UPDATE_USER_SUCCESS ||
     action.type === actionTypes.UPDATE_USER_FAILURE ||
     action.type === actionTypes.REGISTER_REQUEST || 
    action.type === actionTypes.REGISTER_SUCCESS || 
    action.type === actionTypes.REGISTER_FAILURE 

     ){
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:

      return {
        ...state,
        currentUser: action.user
      };
      
    case actionTypes.LOGIN_SUCCESS:

    return {
        ...state,
        globalmessage: action.payload.globalmessage,
        isLoggedIn: action.payload.isLoggedIn,
        role: action.payload.role,
        accessToken: action.payload.accessToken,
        currentUser :action.payload.currentUser,
        expiresIn:action.payload,
        tokenExpiresAt:action.payload.tokenExpiresAt,
        tokenType:action.payload.tokenType
    };
    case actionTypes.LOGIN_FAILURE:

      return {
        ...state,
        globalmessage: action.payload.globalmessage,
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser :{}
    };
    
    case actionTypes.LOGOUT:
      return {};

      case actionTypes.REGISTER_REQUEST:
        return {
          ...state,
           registrationRequest: action.user,
        };
      case actionTypes.REGISTER_SUCCESS:
        return {
          ...state,
          globalmessage: action.payload.globalmessage,
          registrationRequest: action.payload.response,
         
      };
      case actionTypes.REGISTER_FAILURE:
        return {
          ...state,
          globalmessage: action.payload.globalmessage,
          registrationRequest : action.payload.response
      };
    
    case actionTypes.UPDATE_USER_REQUEST:
        return {
          ...state,
          loggingIn: true,
          user: action.user
        };
    case actionTypes.UPDATE_USER_SUCCESS:
        return {
          ...state,
          globalmessage: action.payload.message,
          currentUser:action.payload.updatedUser
        };
    case actionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        globalmessage: action.payload.message

      };

    
    default:
      return state
  }
}else{ return { ...state}}
}
export {authentication} 