import React from 'react'
import No from '../assets/NoImage.jpg'

const NewsCard = ({news}) => {

  return (
    <div className="card shadow-lg bg-white " style={{width: "18rem" , maxWidth:"100%" , display:"flex" , alignItems:"center"  , justifyContent:"center"}}>
  <img style={{ marginTop:"10px"}} src={news.urlToImage ? news.urlToImage : No}  className="card-img-top" alt="..."/>
  <div className="card-body bg-white">
    <h5 className="card-title bg-white">{news.title}</h5>
    <p className="card-title bg-white">{news.description}</p>
    <p className="card-text bg-white"><small className="text-body-secondary bg-white">{news.author}</small></p>
    <a target='_blank' href={news.url} className="btn btn-primary ">Read More</a>
  </div>
</div>
  )
}

export default NewsCard
