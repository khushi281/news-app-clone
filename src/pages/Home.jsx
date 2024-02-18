import React, { useCallback, useContext } from 'react'
import NewsList from '../Component/NewsList'
import Quotes from '../Component/Quotes'
import NewsContext from '../Context/News/NewsContext'
import HeroSection from '../Component/HeroSection'

const Home = () => {
    
    const {topic} = useContext(NewsContext)
  return (
    <div className='container p-5 d-flex flex-column'>
        <Quotes/>
      <HeroSection/>
   
      <h1 className="display-5 text-center my-5 pt-5 ms-5" style={{fontSize:"50px", fontWeight:"500"}}>Trending News For {topic}</h1>
     <div>
   
        <NewsList/>
      
     </div>
    </div>
  )
}

export default Home
