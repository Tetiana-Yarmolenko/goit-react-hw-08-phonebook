import React from 'react';
import s from './HomeView.module.css';

const HomeView = () =>(
    <div className={s.container}>
        <h1 className={s.title}>
      Приветственная страница нашего сервиса
      <img src='https://img5.goodfon.ru/original/1366x768/7/fe/m-nnnn-bbbbb-vvvvvv-ccccc-xxxx.jpg'
        alt='welcome'
      width='450'/>
    </h1>
    </div>
)

export default HomeView;