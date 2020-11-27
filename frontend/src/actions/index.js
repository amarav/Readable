 
import { 
    GET_CATEGORIES,
    GET_POSTS,
    SORT_BY_VOTES,
    SORT_BY_TIME,
    DELETE_POST,
    UPDATE_POST
} from './constants'

import {
    getCategoriesAPI,
    getAllPostsAPI,
    votePostAPI,
    deletePostAPI,
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

export const sortByVotes = (posts) => {
    return {
        type:SORT_BY_VOTES,
        posts,
    }
}

export const sortByTime = (posts) => {
    return {
        type:SORT_BY_TIME,
        posts,
    }
}

export const votePost = (id,option) => {
    return dispatch => {
       votePostAPI(id,option)
       .then(response => dispatch({type: UPDATE_POST,response}))       
    }
}

export const deletePost = (id) => {
    return dispatch => {
        deletePostAPI(id)
        .then(response => dispatch({DELETE_POST,response}))
    }
}