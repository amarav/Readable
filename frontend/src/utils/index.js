const header = 'react-readable'

const url =  'http://localhost:3001' 

const getHeaders = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": Math.random().toString(36).substr(-8)
    }
}

export const getCategoriesAPI = () => {
    return fetch(`${url}/categories`, getHeaders)
    .then(response => response.json())
}

export const getAllPostsAPI = (category = undefined) => {
    if(category !== undefined) {
        return fetch(`${url}/${category}/posts`, getHeaders)
        .then(response => response.json())
    }    
    return fetch(`${url}/posts`, getHeaders)
    .then(response => response.json())
} 