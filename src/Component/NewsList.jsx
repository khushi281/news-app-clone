import React, { useContext, useEffect } from 'react'
import NewsCard from './NewsCard'
import NewsContext from '../Context/News/NewsContext'
import { fetchNews } from '../Context/News/NewsAction'


const NewsList = () => {
    const {allNews ,newsDispatch } = useContext(NewsContext)
    
    
    const getNews = async(topic) => {
        const data = await fetchNews(topic)
        console.log(data);
        
        newsDispatch({
            type:"GET_NEWS",
            payload:{news:data , topic:topic}
        })
    }
    
    useEffect(() => {
        getNews("Indore")
    },[])
    
    
    if(!allNews || allNews.length === 0){
        return(
            <h1 className='row d-flex justify-content-center align-items-center' style={{width:"100%" , fontSize:"80px" , paddingTop:"40px" , paddingLeft:"50px" , fontWeight:"500"}}>Loading...</h1>
            )
        }
        return (
            <div className="row gap-5 ms-5">
  {
      allNews.map((news , index)=> <NewsCard key={index} news={news} />)
     
    }
  
</div>

  )
}

export default NewsList
