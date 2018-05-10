import React from 'react';
import './modal_window.css';

export default class ModalWindows extends React.Component {

    render() {

        let modalWindowVisible =this.props.modalWindowVisible;
        let modalWindowVisibleButton = this.props.modalWindowVisibleButton;


        console.log(modalWindowVisibleButton);

        return (

            <div className={'modal_window ' + (modalWindowVisible ? 'modal_window__visible':'modal_window__none')}>
                <div className="modal_window__overlay"></div>
                <div className="modal_window_visible">
                    <h3>Заголовок</h3>
                    <div className="modal_window__content">
                        <p>Логин</p>
                        <p>Паролька</p>
                    </div>
                    <button onClick={this.props.modalWindowVisibleButton}>закрыть</button>
                </div>
            </div>
        )
    }
}