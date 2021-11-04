import axios from 'axios'
import { types } from '../types/types'

const API_URL = 'http://localhost:8080/api'

export const getPosts = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${API_URL}/posts`)
    dispatch({
      type: types.GET_POSTS,
      payload: data
    })
  }
}

export const addPost = (payload) => {
  return async (dispatch, getState) => {
    const { posts, filteredPosts } = getState().postReducer
    const { data } = await axios.post(`${API_URL}/posts`, payload)

    dispatch({
      type: types.ADD_POST,
      payload: {
        posts: [...posts, data],
        filteredPosts: [...filteredPosts, data]
      }
    })
  }
}

export const deletePost = (payload) => {
  return async (dispatch, getState) => {
    const { posts, filteredPosts } = getState().postReducer
    const { data } = await axios.delete(`${API_URL}/posts/${payload}`)

    dispatch({
      type: types.DELETE_POST,
      payload: {
        posts: posts.filter((post) => post.id != data.id),
        filteredPosts: filteredPosts.filter((post) => post.id != data.id)
      }
    })
  }
}

export const searchPosts = (payload) => {
  return (dispatch, getState) => {
    const { posts, filteredPosts } = getState().postReducer

    if (payload === '') {
      dispatch({
        type: types.SEARCH_POSTS,
        payload: posts
      })
    } else {
      dispatch({
        type: types.SEARCH_POSTS,
        payload: filteredPosts.filter((post) =>
          post.name.toLowerCase().includes(payload.toLowerCase())
        )
      })
    }
  }
}
