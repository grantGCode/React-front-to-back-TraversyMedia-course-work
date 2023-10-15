import { createContext, useReducer } from "react";
import githubReducer from './GithubReducer'

const GithubContext = createContext()


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN  = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
        }   
        
        const [state, dispatch] = useReducer(githubReducer, initialState)
        
        // Set loading
        const setLoading = () => {dispatch({type: 'SET_LOADING',})
        }   
    
        // Clear Users from state
        const clearUsers = () => {dispatch({type: 'CLEAR_USERS'})}
        
       
        
        // Get Single User
        const getUser = async (login) => {
            setLoading();
            
            const params = new URLSearchParams({
                q: login
            })
            
            const response = await fetch(`${GITHUB_URL}/users/${login}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                },
            })
            /* If user not found redirect to NotFound page*/
            if (response.status === 404) {
                window.location = '/notfound'
                /* If user found direct to /User/:login */
            }else{  
                const data = await response.json()
                
                dispatch({
                    type: 'GET_USER',
                    payload: data,
                });
            }}   
            
            // Get User Repos
            const getUserRepos = async (login) => {
                    setLoading();

                    const params = new URLSearchParams({
                        sort: "created",
                        per_page: 10
                    })
                                        
                    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
                            headers: {
                                    Authorization: `token ${GITHUB_TOKEN}`
                                }
                            })  
                            
                            const data = await response.json()
                            
                            dispatch({
                                type: 'GET_REPOS',
                                payload: data,
                            })
                            }

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        clearUsers,
        getUser,
        getUserRepos,
    }}>{children}</GithubContext.Provider>
}

export default GithubContext