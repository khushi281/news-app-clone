import React, { useContext, useState } from 'react'
import NewsContext from '../Context/News/NewsContext'
import { fetchNews } from '../Context/News/NewsAction'
import Daily from "../assets/Daily news.png"

const Navbar = () => {

    const {newsDispatch} = useContext(NewsContext)
    const [search , setSearch] = useState("")


    const handleSearch = async(e) => {
        e.preventDefault()
       
       const data = await fetchNews(search)
        newsDispatch({
            type : "GET_NEWS",
            payload:{news:data , topic:search}
        })
        setSearch("")
    }

    const handleClick = async(topic) => {
        const data = await fetchNews(topic)
        newsDispatch({
            type : "GET_NEWS",
            payload:{news:data , topic:topic}
        })

    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg w-100">
  <div className="container-fluid bg-body-tertiary">
   <a href='#'> <img src={Daily} className='bg-body-tertiary'style={{width:"160px"}} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-body-tertiary" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-5">
        <li className="nav-item bg-body-tertiary">
          <a className="nav-link  active ms-4 fs-6"  aria-current="page" href="#" onClick={() => handleClick("Indian Sports")} >SPORTS</a>
        </li>
        <li className="nav-item bg-body-tertiary">
          <a className="nav-link active ms-4 fs-6" aria-current="page" href="#" onClick={() => handleClick("Indian Politics")}>POLITICS</a>
        </li>
        <li className="nav-item bg-body-tertiary">
          <a className="nav-link active ms-4 fs-6" aria-current="page" href="#" onClick={() => handleClick("Indian Technology")}>TECHNOLOGY</a>
        </li>
        <li className="nav-item bg-body-tertiary">
          <a className="nav-link active ms-4 fs-6" aria-current="page" href="#" onClick={() => handleClick("Bollywood")}>ENTERTAINMENT</a>
        </li>
      </ul>
      <form className="d-flex bg-body-tertiary" role="search" onSubmit={handleSearch}>
        <input className="form-control me-2 rounded-0 border-dark" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button className="btn btn-outline-success rounded-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
