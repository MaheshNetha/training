import axiosInstance from '../../utils/axios.config'

export const panServices = {
    getPans,
  
}

function getPans(){
    axiosInstance.get("user/getpans")
}
