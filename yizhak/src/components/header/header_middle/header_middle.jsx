import React from 'react';
import Cart from './cart';
import Logo from './logo';
import Search from './search';
import style from './header_middle.module.css';

function HeaderMiddle() {
  return (
    <>
      <div className={`header-middle__container ${style.header_middle}`}>
         <Logo />
         <div className={style.search_cart}>
           <Search />
           <Cart />
         </div>
      </div>
    </>
  );
}

export default HeaderMiddle;