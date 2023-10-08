import { createContext, useReducer } from "react";
import githubReducers from './GithubReducer'

const GithubContext = createContext()


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN  = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducers, initialState)
    
    // Set loading
    const setLoading = () => {dispatch({type: 'SET_LOADING',})
    console.log('function ran')
}
    // Get Search Results
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })  
        
        const {items} = await response.json()

        dispatch({
        users: state.users,
        type: 'Get_USERS',
        payload: items,
      })
    }

    return <GithubContext.Provider value={{
        users: state.users, 
        loading: state.loading, 
        searchUsers,
    }}>{children}</GithubContext.Provider>
}

export default GithubContext