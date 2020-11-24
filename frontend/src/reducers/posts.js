import { GET_POSTS } from '../actions/constants'

export const posts = (state = [],action) => {
  switch(action.type)
  {  
    case GET_POSTS:
        return action.response;
    default:
        return state;
  }
}