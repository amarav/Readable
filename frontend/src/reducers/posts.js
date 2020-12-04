import { GET_POSTS, SORT_BY_VOTES, SORT_BY_TIME, UPDATE_POST, DELETE_POST, CREATE_POST } from '../actions/constants'

export const posts = (state = [], action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.response;
        case SORT_BY_VOTES:
            return action.posts.sort((a, b) => b.voteScore - a.voteScore)
        case SORT_BY_TIME:
            return action.posts.sort((a, b) => b.timestamp - a.timestamp)
        case CREATE_POST:
            return [
                ...state,
                action.response,
            ]
        case UPDATE_POST:
            return state.map(post => post.id === action.response.id ? action.response : post)
        case DELETE_POST:
            return state.filter(post => action.response.id !== post.id)
        default:
            return state;
    }
}