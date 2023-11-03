import React from 'react';
import Layout from '../components/layout/layout';
import style from './categories.module.css';
import Sidebar from '../components/main/sidebar/sidebar';
import { useParams } from 'react-router-dom';
import { FRUITS } from './fruits';
import { VEGETABLES } from './vegetables'; 
import { NEWARRIVALS } from './newArrivals';
import Card from '../elements/card';

function Categories() { 
  const {category} = useParams();

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
      break;
  }

  return (
    <>
      <Layout>
        <div className={`categories__container ${style.categories}`}>
          <Sidebar />
          <div className={style.categoriesProducts}>
            {
              arr.map((value, index)=>
              <>
                <Card productId={index} imgUrl={value.imgUrl} title={value.title} price={value.price}
                  category={category} key={`${category}_${index}`}/>
              </>                
              )
            } 
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Categories;