import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Content from './Content';
import my_blog from './data.js';



ReactDOM.render(
    <div className="app">
        <Header/>
        <Content data={my_blog}/>
        {/*<Footer/>*/}
    </div>,
    document.getElementById('app')
);

