import axios from 'axios'

const api = axios.create({
  baseURL: 'https://omni-06-reactbox.herokuapp.com'
})
export default api
