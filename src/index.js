import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import Header from './Header';
// import Content from './Content';
// import my_blog from './data.js';
// import my_category from './category.js';
import MyApp from './app.js';

import ModalWindow from './modal_window'

ReactDOM.render(
    <div className="app">
        <MyApp/>
    </div>,
    document.getElementById('app')
);

// ReactDOM.render(
//     <div>
//         <ModalWindow/>
//     </div>,
//     document.getElementById('modal_window')
// );