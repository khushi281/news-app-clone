import React, { useContext, useEffect } from 'react'
import QuotesContext from '../Context/Quotes/QuotesContext'
import { fetchQuotes } from '../Context/Quotes/QuotesAction'
import NewsContext from '../Context/News/NewsContext'

const Quotes = () => {

    const {quotesDispatch} = useContext(QuotesContext)
    const {quotesData} = useContext(QuotesContext)
    const {allNews} = useContext(NewsContext)

    const getQuotes = async() => {
        const data = await fetchQuotes()
        console.log(data);

        quotesDispatch({
            type:"GET_QUOTES",
            payload:data
        })
    }

    useEffect(() => {
    getQuotes()
    },[allNews])

    if(!quotesData || quotesData.length === 0){
        return(
            <>
            <marquee className='row d-flex justify-content-center align-items-center text-primary-emphasis pt-5 pb-3' style={{ fontSize:"50px" ,fontWeight:"400"}}>Loading...</marquee>
  
  </>
        )
    }

  return (
    <marquee className = "display-6 my-3 pt-5 pb-3 text-primary-emphasis" style={{fontWeight:"400"}}>{quotesData.content} -{quotesData.author}</marquee>
  )
}

export default Quotes
