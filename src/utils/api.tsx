import axios from 'axios'

export const API_URL = 'https://randomuser.me/api/'

const axiosInstance = axios.create({
  baseURL: API_URL
})

export default axiosInstance
