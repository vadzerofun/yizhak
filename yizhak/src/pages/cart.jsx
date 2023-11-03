import React from 'react';
import Layout from '../components/layout/layout';
import style from './cart.module.css';
import Button from '../elements/button';
import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { FRUITS } from './fruits';
import { VEGETABLES } from './vegetables'; 
import { NEWARRIVALS } from './newArrivals';

function Cart(props) {  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const id = props.match.params.id;
  const {category, id} = useParams();

  let arr = [];
  switch (category) {
    case 'fruits':
      arr = FRUITS;
      break;
    case 'vegetables':
      arr = VEGETABLES;
      break;
    case 'new-arrivals':
      arr = NEWARRIVALS;
      break;
  
    default:
      arr = NEWARRIVALS;
      break;
  }

  return (
    <>
      <Layout>
        <div className={`cart__container ${style.cart}`}>
          <div className={`${style.cartGallery}`}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#A0C49D',
                '--swiper-pagination-color': '#A0C49D',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >              
              <SwiperSlide>
                <img src={arr[id].imgUrl} alt='img'/>
              </SwiperSlide>           
              <SwiperSlide>
                <img src={arr[id].imgUrl} alt='img'/>
              </SwiperSlide>           
              <SwiperSlide>
                <img src={arr[id].imgUrl} alt='img'/>
              </SwiperSlide>           
            </Swiper>
            
            {/* <img src={arr[id].imgUrl} alt='img'/> */}
          </div>
          <div className={`${style.cartInfo}`}>
            {/* <h2>Cart</h2> */}
            <h4 className='mb-0'>{arr[id].title}</h4>
            <h5 className='mb-0'>{arr[id].price}</h5>
            <Button text='Додати в кошик'/>
            <div className={style.infoLine}></div>
            <h4 className='mb-0'>Description</h4>
            <p className={`mb-0 ${style.paragraph}`}>{arr[id].description}</p>
          </div>
        </div>
      </Layout>   
    </>
  );
}

export default Cart;