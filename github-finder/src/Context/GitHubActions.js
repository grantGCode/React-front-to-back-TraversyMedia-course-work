import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN  = process.env.REACT_APP_GITHUB_TOKEN


const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}`},
})

 // Get Search Results
 export const searchUsers = async (text) => {

    
    const params = new URLSearchParams({
        q: text
    })
    
    
    const response = await github.get(`${GITHUB_URL}/search/users?${params}`)
    return response.data.items
}

// Get User and Repos

export const  getUserAndRepos = async(login) => {
    const  [user, repos] = await Promise.all([
        github.get(`/user/${login}`),
        github.get(`/user/${login}/repos`),
    ])

    return { user: user.data, repos: repos.data }
}
