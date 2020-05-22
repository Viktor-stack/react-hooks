import React, {useReducer} from 'react';
import {GitHubContext} from "./githubContect";
import {githubReducer} from "./gitnubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types.";
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRE

const withCreds = url => {
  return `${url}client_id=${CLIENT_ID}&client_secret${CLIENT_SECRET}`
}

const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const search = async value => {
    setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    )
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  const getUser = async name => {
    setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}?`)
    )
    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }
  const getRepos = async name => {
    setLoading()
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}/repos?`)
    )
    dispatch({
      type: GET_REPOS,
      payload: response.data
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})

  const setLoading = () => dispatch({type: SET_LOADING})

  const {user, users, loading, repos} = state
  return (
    <GitHubContext.Provider value={{
      setLoading, search, getUser, getRepos, clearUsers,
      user, users, loading, repos
    }}>
      {children}
    </GitHubContext.Provider>
  );
};

export default GithubState;