const header = 'react-readable'

const url =  'http://localhost:3001' 

const getHeaders = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": Math.random().toString(36).substr(-8)
    }
}

const postHeaders = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": header
    }
}

const putHeaders = {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
        "Authorization": header
    }
}

const deleteHeaders = {
    method: 'DELETE',
    headers: {
        "Content-Type": "application/json",
        "Authorization": header
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

export const createPostAPI = (body) => {
    postHeaders.body = JSON.stringify(body)
    return fetch(`${url}/posts`, postHeaders)
    .then(response => response.json())
}

export const votePostAPI = (id, option) => {
    postHeaders.body = JSON.stringify({option})
    return fetch(`${url}/posts/${id}`, postHeaders)
    .then(response => response.json())
}

export const editPostAPI = (id, body) => {
    putHeaders.body = JSON.stringify(body)
    return fetch(`${url}/posts/${id}`, putHeaders)
    .then(response => response.json())
}

export const deletePostAPI = (id) => {
    return fetch(`${url}/posts/${id}`, deleteHeaders)
    .then(response => response.json())
}

export const generateId = () => {
    let id = (Math.random() + 1).toString(36).substring(2)
    return id
}