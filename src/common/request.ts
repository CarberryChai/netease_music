import axios, { AxiosError, AxiosResponse } from 'axios'

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data
  },
  (err: AxiosError) => {
    if (err.response === undefined) {
      return Promise.reject(err.message)
    }
    if (err.response?.status === 404) {
      window.toast('not found')
      return
    }
    if (err.response?.status >= 500) {
      window.toast('服务器错误~')
      return
    }
  }
)

export function get(url: string, data = {}): Promise<AxiosResponse<unknown>> {
  return axios.get(url, {
    params: data,
  })
}

export function post(url: string, data = {}): Promise<AxiosResponse<unknown>> {
  return axios.post(url, data)
}
