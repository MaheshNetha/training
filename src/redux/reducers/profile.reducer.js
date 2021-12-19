import { actionTypes } from '../actionTypes'
import { initialState } from '../state'

 function profileReducer(state = initialState.profileData, action) {

    if(action.type === actionTypes.GET_PROFILE_SUCCESS || 
       action.type === actionTypes.UPDATE_PROFILE_SUCCESS || 
       action.type === actionTypes.GET_PROFILE_FAILURE ||
       action.type === actionTypes.UPDATE_PROFILE_FAILURE 
  
       ){
    switch (action.type) {
    
      case actionTypes.GET_PROFILE_SUCCESS:

      const { user_key ,agent_key , pan ,email , mobile ,mobile_validated ,email_validated , upi_id ,pans , mandates} = action.payload.response;
  
      return {
          ...state,
          globalmessage: action.payload.globalmessage,
          statusCode:action.payload.statusCode,
          statusDescription : action.payload.statusDescription,
          userKey : user_key ,
          agentKey:agent_key,
          pan:pan,
          email:email,
          mobile:mobile,
          mobileValidated:mobile_validated,
          emailValidated:email_validated,
          UPI :upi_id,
          PANs:pans,
          mandates:mandates
        
      };
      case actionTypes.GET_PROFILE_FAILURE:
  
        return {
          ...state,
          globalmessage: action.payload.globalmessage,
          statusCode:action.payload.statusCode,
          statusDescription : action.payload.statusDescription,
      };
      
      case actionTypes.UPDATE_PROFILE_SUCCESS:

        const {  clids ,user_mandates  } = action.payload.response;



       const newPans = state.pans.map(item=> {
           let k ;
           k.pan = item.pan;
           k.pan_flag = item.pan_flag;
           k.upi_id = item.upi_id;
           k.dpclids = clids
           item.dpclids = clids;

           return k;
          
       })
      
        return {
            ...state,
            globalmessage: action.payload.globalmessage,
            statusCode:action.payload.statusCode,
            statusDescription : action.payload.statusDescription,
            userKey :  action.payload.response.user_key ,
            agentKey:action.payload.response.agent_key,
            pan:action.payload.response.pan,
            email:action.payload.response.email,
            mobile:action.payload.response.mobile,
            pans :  newPans ,
            mandates:user_mandates
          
        };
        case actionTypes.UPDATE_PROFILE_FAILURE:
    
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
  export {profileReducer} 