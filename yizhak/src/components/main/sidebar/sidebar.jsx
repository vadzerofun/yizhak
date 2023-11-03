import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './sidebar.module.css';

function Sidebar() {
  return (
    <>
      <ul className={style.sidebar}>        
        <li>
          <NavLink to="/categories/new-arrivals" className={(navData) => navData.isActive ? style.categorySelected : style.category}>
            Новинки
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/fruits" className={(navData) => navData.isActive ? style.categorySelected : style.category}>
            Фрукти
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/vegetables" className={(navData) => navData.isActive ? style.categorySelected : style.category}>
            Овочі
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/bakery" className={(navData) => navData.isActive ? style.categorySelected : style.category}>
            Випічка
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;