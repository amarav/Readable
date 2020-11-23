 
import { 
    GET_CATEGORIES
} from './constants'

import {
    getCategoriesAPI,
} from '../utils'


export const getCategories = () => {
    return dispatch => {
        getCategoriesAPI()
        .then(response => dispatch({type: GET_CATEGORIES, response}))
    }
}
