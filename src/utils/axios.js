import * as simpleAxios from 'axios'

export const axiosLogin = simpleAxios.create({
    baseURL: 'http://localhost:3003/api',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YXBwbGljYXRpb246c2VjcmV0'
    }
})

export const axios = simpleAxios.create({
    baseURL: 'http://localhost:3003/api',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
})

const interceptor = axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

function successHandler(response){
    return response.data.data
}

function errorHandler(error){
    
    if(error.response.data.name !== "invalid_token"){
        return Promise.reject(error.response)
    }

    axios.interceptors.response.eject(interceptor)

    axiosLogin.post('/oauth/token', new URLSearchParams({
        'grant_type': 'refresh_token',
        'refresh_token': localStorage.getItem('refreshToken')
    })).then(res => {
        const { accessToken, refreshToken } = res.data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    }).catch(err => {
        localStorage.removeItem('isAuthenticated')
        window.location = '/login'
    })
}
  
