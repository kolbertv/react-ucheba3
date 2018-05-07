import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Content from './Content'
import './data'

let my_blog = [
    {
        photo: './img/beauty-354565_1280.jpg',
        title: 'Sed eleifend sed',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        Laboriosam quis, tempora.',
        big_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        Laboriosam quis, tempora.',
    },
    {
        photo: './img/feet-349687_1280.jpg',
        title: 'Sed eleifend sed',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        Laboriosam quis, tempora.',
        big_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        Laboriosam quis, tempora.',
    },
    {
        photo: './img/girl-354579_1280.jpg',
        title: 'Sed eleifend sed',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        Laboriosam quis, tempora.',
        big_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        expedita ipsam minus voluptatem? Accusantium assumenda cumque molestias.\n' +
        '                        Laboriosam quis, tempora.',
    }
];


ReactDOM.render(
    <div className="app">
        <Header/>
        <Content data={my_blog}/>
        {/*<Footer/>*/}
    </div>,
    document.getElementById('app')
);

