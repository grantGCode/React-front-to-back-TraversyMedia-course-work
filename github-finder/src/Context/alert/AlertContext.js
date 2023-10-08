import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer.js"


const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const intialState = null

    // Set Alert
    const setAlert = (meg, typ) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {meg, typ}   
        })
        setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000)
    }


    const [state, dispatch] = useReducer(alertReducer, intialState)

    return <AlertContext.Provider value={{alert: state, setAlert}}>
                {children}
            </AlertContext.Provider>
}


export default AlertContext