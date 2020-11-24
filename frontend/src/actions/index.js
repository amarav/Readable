 
import { 
    GET_CATEGORIES,
    GET_POSTS,
} from './constants'

import {
    getCategoriesAPI,
    getAllPostsAPI,
} from '../utils'


export const getCategories = () => {
    return dispatch => {
        getCategoriesAPI()
        .then(response => dispatch({type: GET_CATEGORIES, response}))
    }
}


export const getAllPosts = (category = undefined) => {
     return dispatch => {
         getAllPostsAPI(category)
         .then(response => dispatch({type:GET_POSTS,response}))
     }
}
