// utils/axiosInstance.js
import Axios from 'axios'

const { NEXT_PUBLIC_SERVER_URL } = process.env

const instance = Axios.create({
  baseURL: `${NEXT_PUBLIC_SERVER_URL}`
})

instance.interceptors.request.use(
  (config: any) => {
    let token = localStorage.getItem('token') || ''
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-token': token ? JSON.parse(token) : '',
      Authorization: `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response
    } else {
      const messages = response.data.messages
      if (messages) {
        if (messages instanceof Array) {
          return Promise.reject({ messages })
        }
        return Promise.reject({ messages: [messages] })
      }
      return Promise.reject({ messages: ['got errors'] })
    }
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
    } else if (error.response && error.response.status === 500) {
      return Promise.reject(error.response)
    } else {
      return Promise.reject(error)
    }
  }
)

export { instance as axios }
