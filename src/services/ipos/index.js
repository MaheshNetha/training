import axiosInstance from '../../utils/axios.config'

export const IPOServices = {
    getNSEIPOList,
    getNSEIPODetails,
    nseTransactions,
    exchangeIPODetails
   
}

function getNSEIPOList(payload){

    axiosInstance.post('/nse/getipolist',payload)
}


function getNSEIPODetails(payload){
    axiosInstance.post('nse/getipodetails',payload)
}

function nseTransactions(payload){

    axiosInstance.post('nse/addtransaction',payload)
}

function exchangeIPODetails(payload){
    axiosInstance.post('nse/exchipolist',payload)
}

