
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Listpage.module.scss';


function List() {
  return (
    <div className={s.listpage}>
    <h1 className={s.headding}>Nguyen Thi Hau - FE</h1>
    <h2 className={s.title}>All Page</h2>
    <ul className={s.list}>
      <li className={s.list__item}><Link to="/guide" className={s.list__link}>Guide Page</Link></li>
      <li className={s.list__item}><Link to="/home" className={s.list__link}>Home Page</Link></li>
      <li className={s.list__item}><Link to="/about" className={s.list__link}>About Page</Link></li>
    </ul>
    </div>
  );
}

export default List;
