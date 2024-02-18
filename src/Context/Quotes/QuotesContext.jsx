import { createContext, useReducer } from "react";
import QuotesReducer from "./QuotesReducer";

const QuotesContext = createContext()

export const QuotesProvider = ({children}) => {

    const initialState = {
        quotesData:null
    }

    const [state , quotesDispatch] = useReducer(QuotesReducer , initialState)

    return(
        <QuotesContext.Provider value={{...state , quotesDispatch}}>{children}</QuotesContext.Provider>
    )
}

export default QuotesContext