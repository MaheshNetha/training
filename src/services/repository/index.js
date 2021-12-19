import axiosInstance from '../../utils/axios.config'

export const repositoryServices = {
    
   repositoryData,
   repositoryDetails
}

function repositoryData(){

    axiosInstance.get('/user/repositorydata')
}

function repositoryDetails(){

    axiosInstance.get('/user/getclientids')
}