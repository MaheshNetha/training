export const initialState = {

    globalmessage: '',
    isLoggedIn: false,
    role: '',
    accessToken: '',
    currentUser:{},
    profileData : {
        userKey : '',
        agentKey:'',
        pan:'',
        email:'',
        mobile:'',
        mobileValidated:false,
        emailValidated:false,
        UPI :'',
        PANs:[],
        mandates:[]
    },
    ipos:[]


}