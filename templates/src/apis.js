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
  return $.get('/articles', options)
}

export function getArtilesDetail(pid) {
  return $.get(`/articles/${pid}`)
}

export function getNavs() {
  return $.get('/navs').then(res => res.data)
}

export function getCourses() {
  return $.get('/courses').then(res => res.data)
}
export function getSchools() {
  return $.get('/schools').then(res => res.data)
}
export function getProvinces() {
  return $.get('/provinces').then(res => res.data)
}

export function getArticlePageInfo(params) {
  return $.get('/articles/page', params).then(res => res.data)
}

export function getSpecials() {
  return $.get('/specials').then(res => res.data)
}

export function getSpecialById(id) {
  return $.get(`/special/${id}`).then(res => res.data)
}

export function getCourseById(id) {
  return $.get(`/course/${id}`).then(res => res.data)
}
export function addCourse(params) {
  return $.post('/course', params)
}
export function updateCourseById({id, params}) {
  return $.post(`/course/${id}`, params)
}