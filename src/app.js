import React from 'react';
import Header from './Header';
import Content from './Content';
import my_blog from './data.js';
import my_category from './category.js';
import ModalWindow from "./modal_window";


export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0,
            modalWindowVisible: false
        };

        this.categoryChange = this.categoryChange.bind(this)
        this.modalWindowVisibleState = this.modalWindowVisibleState.bind(this)

    }

    categoryChange(value) {
        this.setState({
            category: value
        })
    }

    modalWindowVisibleState() {
        this.setState({
            modalWindowVisible: !this.state.modalWindowVisible,
        })
    }

    // categoryState() {
    //     this.setState({
    //         category: !this.state.category
    //     })
    // }


    render() {

        let categoryState = 0;

        console.log(this.state.category);

        return (
            <div>
                <Header category={my_category} categoryChange={this.categoryChange} modalWindowVisibleButton={this.modalWindowVisibleState}/>
                <Content data={my_blog} category_state={this.state.category}/>
                {/*<Footer/>*/}

                <ModalWindow modalWindowVisible={this.state.modalWindowVisible} modalWindowVisibleButton={this.modalWindowVisibleState}/>
            </div>
        )
    }
}
