import Axios from 'axios'

enum Method {
  'GET' = 'get',
  'POST' = 'post'
}
interface Param {
  url: string
  method: Method
}
const config = {
  baseURL: 'url',
  timeout: 5000,
  xsrfHeaderName: 'Authorization'
}
const axios = Axios.create(config)
export default axios
