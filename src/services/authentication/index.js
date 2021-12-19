import axiosInstance from '../../utils/axios.config'

export const authServices = {
    login,
    logout,
    registration,
    sendOTP,
    validateOTP,
    forgotPassword,
    updateForgotPassword,
    verifyEmail,
    resendRegistration
}

function login(payload){

    axiosInstance.post('/user/login',payload)
}
function logout(){

}

function registration(payload){
    axiosInstance.post('/user/initregistration',payload)

}
function resendRegistration(payload){
    axiosInstance.post('/user/resendotp',payload)
}

function sendOTP(payload){
    axiosInstance.post('url',payload)

}
function validateOTP(payload){
    axiosInstance.post('/user/validateotp',payload)

}
function forgotPassword(payload){
    axiosInstance.post('/user/forgotpassword',payload)

}

function updateForgotPassword(payload){
    axiosInstance.post('/user/updatefgtpassword',payload)

}
function verifyEmail(payload)
{
    axiosInstance.post('/user/emailverify',payload)

}
