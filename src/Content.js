import React from 'react';
import './content.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategory: 0
        }
    }


    render() {
        let data = this.props.data;
        let category = this.props.category_state;

        console.log(category);

        let blogItem = data.map(function (item, index) {

            if (category === 0) {

                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                );

            } else {

                if (category === item.category) {
                    return (
                        <div key={index}>
                            <Article data={item}/>
                        </div>
                    )
                }
            }
        });

        return (
            <div className="content__container">
                {blogItem}
            </div>
        )
    }
}

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: true
        };
    }

    showMore() {
        this.state.visible ? this.setState({visible: false}) : this.setState({visible: true});
    };

    render() {
        let photo = this.props.data.photo;
        let text = this.props.data.text;
        let big_text = this.props.data.big_text;
        let title = this.props.data.title;
        let visible = this.state.visible;

        return (

            <article className="content__item">
                <img className="content__item__img" src={photo} alt=""/>
                <div className="content__item__header">
                    <h1>{title}</h1>
                </div>
                <div className="content__item__summary">
                    <p className={(visible ? 'visible' : 'none')}>{text}</p>
                    <p className={(visible ? 'none' : 'visible')}>{big_text}</p>

                </div>

                <span onClick={() => this.showMore()}
                      className={'content__item__readMore ' +
                      (visible ? 'content__item__readMore_plus' : 'content__item__readMore_minus')}>
                </span>
            </article>
        )
    }
}
