import { types } from '../types/types'

const INITIAL_STATE = {
  posts: [],
  filteredPosts: []
}

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return { ...state, posts: action.payload, filteredPosts: action.payload }

    case types.ADD_POST:
      return {
        ...state,
        posts: action.payload.posts,
        filteredPosts: action.payload.filteredPosts
      }

    case types.DELETE_POST:
      return {
        ...state,
        posts: action.payload.posts,
        filteredPosts: action.payload.filteredPosts
      }

    case types.SEARCH_POSTS:
      return {
        ...state,
        filteredPosts: action.payload
      }

    default:
      return state
  }
}
