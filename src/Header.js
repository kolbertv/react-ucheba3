import React from 'react';


export default class Header extends React.Component {
    render() {

        let my_category = this.props.category;
        let modalWindowVisibleButton = this.props.modalWindowVisibleButton;

        return (
            <div className="header">
                <Topline  modalWindowVisibleButton={modalWindowVisibleButton}/>
                {/*<HeaderLogo/>*/}
                <Nav category = {my_category} categoryChange={this.props.categoryChange}/>
            </div>
        )
    }
}

class Topline extends React.Component {
    render() {

        let modalWindowVisibleButton = this.props.modalWindowVisibleButton;

        return (
            <div className="topline__container">
                <ul className="icon__ul">
                    <li><a href="http://www.facebook.com">f</a></li>
                    <li><a href="http://www.facebook.com">i</a></li>
                    <li><a href="http://www.facebook.com">iN</a></li>
                    <li><a href="http://www.vk.com">VK</a></li>
                </ul>

                <button className="topline__button" onClick={modalWindowVisibleButton}>login</button>
            </div>
        )
    }
}

class Nav extends React.Component {

     render() {

        let categoryChange = this.props.categoryChange;

        let my_category = this.props.category;

        let myCategoryContainer = my_category.map(function (item, index) {
            return (
                <li key={index} value={index}><a href="#" onClick={()=>categoryChange(index)}>{item}</a></li>
        )
        });

        // console.log(this.props);
        return (
            <div className="menu__container">
                <ul className="menu__ul">
                    {myCategoryContainer}
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