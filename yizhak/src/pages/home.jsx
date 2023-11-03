import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Img from '../elements/img';
import style from './home.module.css';
import '../../node_modules/bootstrap/js/src/carousel';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner_1 from '../images/banner_1.jpg';
import banner_2 from '../images/banner_2.jpg';
import banner_3 from '../images/banner_3.jpg';
import Card from '../elements/card';

import { FRUITS } from './fruits';
import { VEGETABLES } from './vegetables';
import { NEWARRIVALS } from './newArrivals';


function Home() {
  return (
    <>
      <Layout>
        <div className={`home__container ${style.home}`}>
          <Swiper 
            style={{
              '--swiper-navigation-color': '#A0C49D',
              '--swiper-pagination-color': '#A0C49D',
            }}
            className={style.sampleSwiper}            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}            
            slidesPerView={1}
            navigation={{ clickable: true }}
            loop={true}                     
          >
            <SwiperSlide key={`banner_1`}>
              <Img src={banner_1} alt="Img"/>
            </SwiperSlide>
            <SwiperSlide key={`banner_2`}>
              <Img src={banner_2} alt="Img"/>
              </SwiperSlide>
            <SwiperSlide key={`banner_3`}>
              <Img src={banner_3} alt="Img"/>
            </SwiperSlide>
          </Swiper>

          <h4>Новинки</h4>
          <Swiper 
            style={{
              '--swiper-navigation-color': '#A0C49D',
              '--swiper-pagination-color': '#A0C49D',
            }}
            className={`${style.sampleSwiper} ${style.productsSlider}`}            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={5}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            loop={true}                   
          >
            {
              NEWARRIVALS.map((value, index)=>
              <>
                <SwiperSlide key={`NEWARRIVALS_${index}`}>
                  <Card productId={index} imgUrl={value.imgUrl} title={value.title} price={value.price}
                  category='new-arrivals'/>
                </SwiperSlide>
              </>                
              )
            }           
          </Swiper>
          
          <h4>Фрукти</h4>
          <Swiper 
            style={{
              '--swiper-navigation-color': '#A0C49D',
              '--swiper-pagination-color': '#A0C49D',
            }} 
            className={`${style.sampleSwiper} ${style.productsSlider}`}            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={5}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            loop={true}                   
          >            
            {
              FRUITS.map((value, index)=>
              <>
                <SwiperSlide key={`fruits_${index}`}>
                  <Card productId={index} imgUrl={value.imgUrl} title={value.title} price={value.price}
                  category='fruits' />
                </SwiperSlide>
              </>                
              )
            }
          </Swiper>
          
          <h4>Овочі</h4>
          <Swiper  
            style={{
              '--swiper-navigation-color': '#A0C49D',
              '--swiper-pagination-color': '#A0C49D',
            }}
            className={`${style.sampleSwiper} ${style.productsSlider}`}            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={5}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            loop={true}                   
          >
            {
              VEGETABLES.map((value, index)=>
              <>
                <SwiperSlide key={`VEGETABLES_${index}`}>
                  <Card productId={index} imgUrl={value.imgUrl} title={value.title} price={value.price}
                  category='vegetables' />
                </SwiperSlide>
              </>                
              )
            }            
          </Swiper>
          
        </div>
      </Layout>      
    </>
  );
}

export default Home;