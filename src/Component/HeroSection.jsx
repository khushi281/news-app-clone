import React, { useContext } from 'react'


const HeroSection = () => {

   

  return (
<>
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://static.langimg.com/photo/imgsize-63956,msid-106322960/navbharat-times.jpg" style={{height:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>5000 रुपए का लोन, बाइक पर कपड़े बेचे...फिर कोविड में किया ऐसा काम कि पीएम मोदी भी रह गए हैरान</h5>
        
        <a target='_blank' href="https://navbharattimes.indiatimes.com/good-news/dewas-news-loan-of-rs-5000-sold-clothes-on-bike-then-did-such-work-during-covid-that-even-pm-modi-was-surprised/articleshow/106321304.cms" className='mt-3 p-4 btn font-weight-bold'>View</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://static.toiimg.com/thumb/msid-106305553,width-1070,height-580,imgsize-39060,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" style={{height:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>3 Covid-19 cases detected in last 24 hours in Indore district</h5>
       
        <a target='_blank' href='https://timesofindia.indiatimes.com/city/indore/3-covid-19-cases-detected-in-last-24-hours-in-indore-district/articleshow/106305531.cms' className='mt-3 p-4 btn font-weight-bold'>View</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src='https://static.toiimg.com/thumb/msid-106299779,width-1070,height-580,imgsize-583234,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' style={{height:"400px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Aware of challenges faced by mill workers’ kin: MP CM Mohan Yadav</h5>
      
        <a target='_blank' href='https://timesofindia.indiatimes.com/city/indore/aware-of-challenges-faced-by-mill-workers-kin-mp-cm-mohan-yadav/articleshow/106299770.cms' className='mt-3 p-4 btn font-weight-bold'>View</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</>




  )
}

export default HeroSection
