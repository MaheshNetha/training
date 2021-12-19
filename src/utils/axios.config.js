import axios from "axios"; 

const baseURL = "http://localhost:3003"; 
const API_KEY = 'C1D584CA-B374-4726-A53B-61576FCE25B8';

let user = 

  localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")); 


const axiosInstance = axios.create({ 

  baseURL: process.env.REACT_APP_API_URL || baseURL, 

  headers: { 
    Authorization: `Bearer ${user?.user?.accessToken}`, 
    user_ip: "test", 
    apikey:API_KEY

  }, 

  timeout: 5000, 

}); 
axiosInstance.interceptors.request.use(async (req) => { 

  let ip; 
  await axios.get("https://jsonip.com").then((res) => { 

    console.log("ip", res.data.ip); 

    ip = res.data.ip; 

  }); 

  req.headers.user_ip = ip; 
  req.body.user_ip = ip;

  return req; 

}); 


axiosInstance.interceptors.response.use(async (res) => { 
  return res; 
}); 

 
 

export default axiosInstance;