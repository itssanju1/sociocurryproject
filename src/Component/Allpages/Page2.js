import React from 'react'
import '../Allcss/PAge2.css'
import pic3 from '../Images/5.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowCircleRight';

import pic4 from '../Images/7.png'
const Page2 = () => {
  return (
    <>
    <div className='w-100 mt-5 container'>
      <div className='container'>
     <h1 className='text-center container fw-bold'>Our Services</h1>
     
     </div>
     <div className='ml-5'>
     <p className='text-center font-weight-light fs-2 lh-1 container ml-5'>Tailored packages to suit your brand's unique needs and budget, ensuring the right platform selection for maximum impact and results.</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-3 col-xs-12 col-sm-12 col-md-6 page2imgcssfinal1 col-lg-5 '>
        <img src={pic3} className="page2imgcssfinal0  img-fluid" alt="..."/>
     
        </div>
        <div className='col-xl-6 col-md-6 col-xs-8 col-sm-8  mt-5 claspage2buttoncsss1'>
         
          <button type='button' className='mt-5 btn  buttonclasscss buttonclasscss01' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-6' style={{marginLeft:'0.4rem'}}>1. SOCIAL MEDIA MANAGEMENT <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss buttonclasscss02' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-6' style={{marginLeft:'0.4rem'}}>2. SOCIAL MEDIA MARKETING <ArrowForwardIcon className='arrowcss1 rounded-5' style={{width:'3rem',height:'3rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss buttonclasscss03 font-weight-bold' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-6' style={{marginLeft:'0.4rem'}}>3. ONLINE REPUTATION MANAGEMENT <ArrowForwardIcon className='arrowcss2 rounded-5' style={{width:'3rem',height:'3rem'}}/></h4></button>
          <button type='button' className='mt-1 btn buttonclasscss buttonclasscss04' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-6' style={{marginLeft:'0.4rem'}}>4.PRODUCT PHOTOSHOOT & REELS <ArrowForwardIcon className='arrowcss3 rounded-5' style={{width:'3rem',height:'3rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss buttonclasscss05' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-6' style={{marginLeft:'0.4rem'}}>5. SOCIAL MEDIA ADUIT<ArrowForwardIcon className='arrowcss4 rounded-5' style={{width:'3rem',height:'3rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss buttonclasscss06' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-6' style={{marginLeft:'0.4rem'}}>6. CONTENT & SEO  <ArrowForwardIcon className='arrowcss5 rounded-5' style={{width:'3rem',height:'3rem'}}/></h4></button>
          <button type='button' className='mt-1 btn  buttonclasscss buttonclasscss07' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-6' style={{marginLeft:'0.4rem'}}>7. CAMPAIGN MANAGEMENT  <ArrowForwardIcon className='arrowcss6 rounded-5' style={{width:'3rem',height:'3rem'}}/></h4></button>
       

          <img src={pic4} className="w-25 page2imgcssfinal img-fluid"  alt="..."/>
     
        </div>
      <div className='col-xl-3 col-md-3 col-xs-12 col-sm-12  mt-5'></div>
     
     
     
      </div>
    </div>
    </div>
    </>
  )
}

export default Page2