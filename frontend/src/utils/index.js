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