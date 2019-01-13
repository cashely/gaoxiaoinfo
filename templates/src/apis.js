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
export function getHighs() {
  return $.get('/highs').then(res => res.data)
}
export function getProvinces(type) {
  return $.get(`/provinces${type ? '?type=' + type : ""}`).then(res => res.data)
}
export function addProvince(params) {
  return $.post('/province', params)
}
export function updateProvinceById(id, params) {
  return $.post(`/province/${id}`, params)
}
export function  getProvinceById(id) {
  return $.get(`/province/${id}`).then(res => res.data)
}

export function getArticlePageInfo(params) {
  return $.get('/articles/page', params).then(res => res.data)
}

export function getSpecialPageInfo(params) {
  return $.get('/specials/page', params).then(res => res.data)
}

export function getSpecials(params) {
  return $.get('/specials', params).then(res => res.data)
}

export function getSchoolsPageInfo(params){
  return $.get('/schools/page', params).then(res => res.data)
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

export function getSchools(params) {
  return $.get('/schools', params).then(res => res.data)
}

export function getSchoolById(id) {
  return $.get(`/school/${id}`).then(res => res.data)
}

export function getSchoolsPage(params) {
  return $.get('/schools/page', params).then(res => res.data)
}

export function updateSchoolById(id, params) {
  return $.post(`/school/${id}`, params)
}

export function addSchool(params) {
  return $.post('/school', params)
}