import { actionTypes } from "../actionTypes";
import { profileServices } from "../../services";

export const profileActions = {
    getUserProfile ,
    updateUserProfile
}

function getUserProfile(cb){

    const payload = {
        globalmessage :'',
        statusCode:'',
        statusDescription:'',
        response:''
    }
    return dispatch => {
           profileServices.getUserProfile()
           .then(
            (response) => {      
                if(response.data && response.data?.length > 0){   
                    const  resp  = response.data[0]
            payload.globalmessage = `profile successfull`;
            payload.statusCode = resp.status_code;
            payload.statusDescription  = resp.status_desc;
            payload.response  = resp.info;
                    dispatch(success(payload));
                    cb(payload)
                }           
            })
           .catch( error => {
                payload.globalmessage = `${error.response.data}`;
                payload.response = error.response;
                dispatch(failure(payload));
                cb(error)
            }
           )
        
    }
    function success(payload) { return { type: actionTypes.GET_PROFILE_SUCCESS, payload } }
    function failure(payload) { return { type: actionTypes.GET_PROFILE_FAILURE, payload } }

}
function updateUserProfile(newProfile ,cb) {

    const payload = {
        globalmessage :'',
        statusCode:'',
        statusDescription:'',
        response:''
    }
    return dispatch => {
        profileServices.updateUserProfile(newProfile)
        .then(
         (response) => {      
             if(response.data){      
         payload.globalmessage = `profile updated Successfully`;
         payload.response  = newProfile;
         payload.statusCode = response.data[0]?.status_code;
         payload.statusDescription = response.data[0]?.status_desc;
         
                 dispatch(success(payload));
                 cb(payload)
             }           
         })
        .catch( error => {
             payload.globalmessage = `${error.response?.data}`;
             payload.response = error.response;
             dispatch(failure(payload));
             cb(error)
         }
        )
     
 }
 function success(payload) { return { type: actionTypes.UPDATE_PROFILE_FAILURE, payload } }
 function failure(payload) { return { type: actionTypes.UPDATE_PROFILE_SUCCESS, payload } }
}