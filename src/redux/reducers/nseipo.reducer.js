import { actionTypes } from '../actionTypes'
import { initialState } from '../state'

 function ipoReducer(state = initialState.ipos, action) {

    if(action.type === actionTypes.GET_NSE_IPO_LIST_SUCCESS || 
       action.type === actionTypes.GET_NSE_IPO_LIST_FAILURE || 
       action.type === actionTypes.GET_NSE_IPO_DETAILS_SUCCESS ||
       action.type === actionTypes.GET_NSE_IPO_DETAILS_FAILURE 
  
       ){
    switch (action.type) {
    
      case actionTypes.GET_NSE_IPO_LIST_SUCCESS:

  
      return {
          ...state,
          globalmessage: action.payload.globalmessage,
          statusCode:action.payload.statusCode,
          statusDescription : action.payload.statusDescription,
          ipoList : action.payload.response
         
        
      };
      case actionTypes.GET_NSE_IPO_LIST_FAILURE:
  
        return {
          ...state,
          globalmessage: action.payload.globalmessage,
          statusCode:action.payload.statusCode,
          statusDescription : action.payload.statusDescription,
      };
      
      case actionTypes.GET_NSE_IPO_DETAILS_SUCCESS:

      
        return {
            ...state,
            globalmessage: action.payload.globalmessage,
            statusCode:action.payload.statusCode,
            statusDescription : action.payload.statusDescription,
            ipoDetails: action.payload.response
          
        };
        case actionTypes.GET_NSE_IPO_DETAILS_FAILURE:
    
          return {
            ...state,
            globalmessage: action.payload.globalmessage,
            statusCode:action.payload.statusCode,
            statusDescription : action.payload.statusDescription,
        };
        
     
      
      default:
        return state
    }
  }else{ return { ...state}}
  }
  export {ipoReducer} 