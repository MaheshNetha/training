import { actionTypes } from '../action-types';
import { authServices } from '../../services/authentication';

export const authActions = {
   
    login,
    logout,
    registration,
    validateOTP

};


function login({username, password} ,cb) {
    var payload = {
        globalmessage: '',
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser:{}
    }
    return dispatch => {

        dispatch(request({ username }));

        authServices.login(username, password)
            .then(
                response => { 
                    if(response.data.user){

                localStorage.setItem('user',JSON.stringify(response.data));

                payload.globalmessage = `User with email id ${username} loggedin successfully`;
                payload.isLoggedIn = true;
                payload.role = response.data.token_type;
                payload.accessToken = response.data.access_token;
                payload.currentUser = response.data;
                payload.tokenType = response.data.token_type;
                payload.expiresIn = response.data.expires_in;
                payload.tokenExpiresAt = response.data.expires
                ;
               
                        
                       
                        dispatch(success(payload));
                        cb(payload);
                        
                        
                    }
                    else{
                        let msg = 'Please enter valid credentials'
                        dispatch(failure(msg));
                    }
                                  
                },
                error => {

                    payload.globalmessage = `${error.response.data}`;
                    payload.isLoggedIn = false;
                    payload.accessToken = '';
                    payload.role = '';
                    payload.currentUser  = {}
                    payload.tokenType = "";
                    payload.expiresIn = ""
                    dispatch(failure(payload));
                }
            );
    };

    function request(user) { return { type: actionTypes.LOGIN_REQUEST, user } }
    function success(payload) { return { type: actionTypes.LOGIN_SUCCESS, payload } }
    function failure(payload) { return { type: actionTypes.LOGIN_FAILURE, payload } }
}
function registration(registerPayload , cb) {
    var payload = {
        globalmessage: '',
        response:''
    }

    return dispatch => {
        dispatch(request(registerPayload));
        authServices.register(registerPayload)
            .then(
                (response) => { 
                    
                    if(response.data){
                       
                payload.globalmessage = `User Registered Successfully`;
             
                payload.response  = response.data.response;

                        dispatch(success(payload));

                        cb(payload)
               
                    }
                             
                })

               .catch( error => {
                   
                    payload.globalmessage = `${error.response.data}`;
                  
                    payload.response = error.response;
                    dispatch(failure(payload));
                }
               )
            
    };

    function request(user) { return { type: actionTypes.REGISTER_REQUEST, user } }
    function success(payload) { return { type: actionTypes.REGISTER_SUCCESS, payload } }
    function failure(payload) { return { type: actionTypes.REGISTER_FAILURE, payload } }
}

function logout() {
    authServices.logout();
    return { type: actionTypes.LOGOUT };
}

function validateOTP(otpPayload , cb){
   
    

        authServices.login(otpPayload)
            .then(
                response => { 
                    if(response.data){

                        
                      cb(response.data)
                        
                    }
                    else{
                        let msg = response.data
                       cb(msg)
                    }
                                  
                },
                error => {
                   
                    cb(error)
                    
                }
            );
    

  

}