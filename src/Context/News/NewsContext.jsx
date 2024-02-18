import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext()

export const NewsProvider = ({children}) => {

    const initialState = {
        allNews:[
            {
            "source": {
            "id": null,
            "name": "NDTV News"
            },
            "author": null,
            "title": "XAT 2024 Admit Card To Be Out Tomorrow, Check Exam Pattern, Other Details",
            "description": "XAT 2024 Admit Card: It will contain crucial information, including details about the examination centres, timings, and guidelines for the exam day.",
            "url": "https://www.ndtv.com/education/xat-2024-admit-card-to-be-out-tomorrow-check-exam-pattern-other-details-4702329",
            "urlToImage": "https://i.ndtvimg.com/i/2018-01/student-using-computer_650x400_51514963290.jpg",
            "publishedAt": "2023-12-19T08:24:07Z",
            "content": "XAT 2024 Admit Card: Registered candidates can obtain their hall tickets at xatonline.in.\r\nThe Xavier School of Management (XLRI) is set to release the admit card for the Xavier Aptitude Test (XAT) 2… [+3057 chars]"
            }
        ],
        topic:""
    }

    const [state , newsDispatch] = useReducer(NewsReducer , initialState)

    return(
        <NewsContext.Provider value={{...state , newsDispatch}}>{children}</NewsContext.Provider>
    )
}

export default NewsContext