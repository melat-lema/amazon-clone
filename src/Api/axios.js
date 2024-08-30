import axios from "axios";

const axiosInstance= axios.create({
  //for function deployment
  //baseURL: "http://127.0.0.1:5001/clone-27e76/us-central1/api",
  //deployed  version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-qhwf.onrender.com/",
})

export {axiosInstance}