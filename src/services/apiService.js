import axios from "axios"

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_CCTV_BASE_URL,
})

Axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

Axios.interceptors.request.use(
  (config) => {
    const token = ""
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)
