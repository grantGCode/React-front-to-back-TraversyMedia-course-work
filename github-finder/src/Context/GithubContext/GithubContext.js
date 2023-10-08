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
    // Get init users (testing purposes)
    const fetchUsers = async () => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })  
        
        const data = await response.json()

        dispatch({
        users: state.users,
        type: 'Get_USERS',
        payload: data,
      })
    }

    return <GithubContext.Provider value={{
        users: state.users, 
        loading: state.loading, 
        fetchUsers,
    }}>{children}</GithubContext.Provider>
}

export default GithubContext