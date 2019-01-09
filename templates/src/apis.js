import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/a-www-form-urlencoded';
const $ = {
  get: (url, params) => {
    return axios.get(url, {
      params: params
    }).then(res => {
      return res.data
    })
  },
  post: (url, params) => {
    return axios.post(url, params)
  }
}

export function getArtilesData(options) {
  return $.get('/articles')
}

export function getArtilesDetail(pid) {
  return $.get(`/articles/${pid}`)
}

export function getNavs() {
  return $.get('/navs').then(res => res.data)
}