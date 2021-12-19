import axiosInstance from '../../utils/axios.config'

export const profileServices = {
    getUserProfile,
    updateUserProfile,
   
}

function getUserProfile(){

    axiosInstance.get('/userp/userprofile')
}


function updateUserProfile(payload){
    axiosInstance.post('/userp/userprofile',payload)
}


