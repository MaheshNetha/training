import { actionTypes } from "../actionTypes";
import { IPOServices } from "../../services";

export const profileActions = {
     getNSEIPOList,
     getNSEIPODetails
}

function getNSEIPOList(ipoPayload,cb){
    const payload = {
        globalmessage :'',
        statusCode:'',
        statusDescription:'',
        response:''
    }
    return dispatch => {
        IPOServices.getNSEIPOList(ipoPayload)
           .then(
            (response) => {      
                if(response.data && response.data?.length > 0){   
                    const  resp  = response.data[0]
            payload.globalmessage = `ipos successfull`;
            payload.statusCode = resp.status_code;
            payload.statusDescription  = resp.status_desc;
            payload.response  = resp.ListofIPOs;
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

function getNSEIPODetails(ipoPayload,cb){

    const payload = {
        globalmessage :'',
        statusCode:'',
        statusDescription:'',
        response:''
    }
    return dispatch => {
        IPOServices.getNSEIPOList(ipoPayload,cb)
           .then(
            (response) => {      
                if(response.data && response.data?.length > 0){   
                    const  resp  = response.data[0]
            payload.globalmessage = `ipo details successfull`;
            payload.statusCode = resp.status_code;
            payload.statusDescription  = resp.status_desc;
            payload.response  = resp.IPODetails;
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
    function success(payload) { return { type: actionTypes.GET_NSE_IPO_DETAILS_SUCCESS, payload } }
    function failure(payload) { return { type: actionTypes.GET_NSE_IPO_DETAILS_FAILURE, payload } }

}