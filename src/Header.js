import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Topline/>
                {/*<HeaderLogo/>*/}
                <Nav/>
            </div>
        )
    }
}

class Topline extends React.Component {
    render() {
        return (
            <div className="topline__container">
                <ul className="icon__ul">
                    <li><a href="http://www.facebook.com">f</a></li>
                    <li><a href="http://www.facebook.com">i</a></li>
                    <li><a href="http://www.facebook.com">iN</a></li>
                    <li><a href="http://www.vk.com">VK</a></li>
                </ul>

                <button className="topline__button">login</button>
            </div>
        )
    }
}

class Nav extends React.Component {
    render() {
        return (
            <div className="menu__container">
                <ul className="menu__ul">
                    <li><a href="#">жизнь</a></li>
                    <li><a href="#">тачки</a></li>
                    <li><a href="#">техника</a></li>
                    <li><a href="#">наука</a></li>
                </ul>
            </div>
        )
    }
}

// class HeaderLogo extends React.Component {
//     render() {
//         return (
//             <div className="headerlogo">
//                 <div className="headerlogo__container">
//                     <h1>блог</h1>
//                 </div>
//             </div>
//         )
//     }
// }