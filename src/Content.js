import React from 'react';
import './content.css';

export default class Content extends React.Component {

    constructor(props) {
        super();
        this.state = {
            visible: true
        };
    }
    render() {
        let data = this.props.data;
        let visible = this.state.visible;
        let blogItem = data.map(function (item, index) {
            return (

                <article key={index} className="content__item">
                    <img className="content__item__img" src={item.photo} alt=""/>
                    <div className="content__item__header">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="content__item__summary">
                        <p className={(visible ? 'visible' : 'none')}>{item.text}</p>
                        <p className={(visible ? 'none' : 'visible')}>{item.big_text}</p>
                        <span className={'content__item__readMore ' + (visible ? 'visible' : 'none')}></span>
                    </div>
                </article>
            );
        });

        return (
            <div className="content__container">
                {blogItem}
            </div>
        )
    }
}
