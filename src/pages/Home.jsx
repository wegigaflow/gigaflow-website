import React from 'react'
import '../styles/Home.css'
// import {Giga-H3} from '../assets/Giga-H3.svg';
export const Home = () => {
  return (
    <div className='hm-gf-container-1'>
        <div className='hm-gf-t'>
        <h1 className='hm-gf-t1'>Digital solutions for</h1>
        <h1 className='hm-gf-t2'>Your<span className='hm-gf-t2-sp'>Business</span></h1>
        </div>
        <div className='hm-gf-p'>
          <p className='hm-gf-para'>At GigaFlow, we specialize in creating innovative websites, optimizing online presence, and analyzing data to unlock your business's full potential. Our team of experts is dedicated to delivering tailor-made digital solutions that not only meet but exceed your expectations. Whether you're looking to build a stunning website, improve your search engine rankings, or make data-driven decisions, GigaFlow is your trusted partner in the digital world.</p>
        </div>
        <div className='hm-gf-btn'>
          <button className='hm-gf-expbtn'>Explore</button>
        </div>
    </div>
  )
}

export default Home;