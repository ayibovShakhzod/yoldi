import axios from "axios"
import { cookies } from "./cookie"
import { CookieKeys } from "src/constants"

const axiosClient = axios.create()

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.request.use(
  (config) => {
    const token = cookies.get(CookieKeys.ACCESS_TOKEN)
    return {
      ...config,
      headers: {
        "X-API-KEY": token,
      },
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClient
