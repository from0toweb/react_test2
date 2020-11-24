import React, { useState, useEffect } from 'react';
import './LoginPopup.sass';
import cn from 'classnames';
import { connect } from 'react-redux';
import { logIn } from '../../redux/LoginPopup/actions';

const LoginPopup = ({ modalOpen, log, popupState, setModalOpen }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setError(popupState.error);
        if (!popupState.error) {
            setModalOpen(false);
            setUserName('');
            setPassword('');
        }
    }, [popupState, setModalOpen]);

    const closeModal = e => {
        if (e.target.id === 'modal') {
            setModalOpen(false);
        }
    };

    // отправка данных для проверки пользователя
    const formSubmit = e => {
        e.preventDefault();
        log({ userName, password });
    };

    const modalClass = cn('modal', { 'modal--active': modalOpen });
    return (
        <div id="modal" className={modalClass} onClick={closeModal}>
            <div className="modal__dialog">
                {error && <small className="modal__error">{error}</small>}

                <form className="modal__form" onSubmit={formSubmit}>
                    <input
                        type="text"
                        className="modal__input modal__input--user"
                        placeholder="Введите логин"
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                    />
                    <input
                        type="text"
                        className="modal__input modal__input--password"
                        placeholder="Введите пароль"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className="button modal__button">Войти</button>
                </form>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        popupState: state.popup,
    };
}

function mapDispathToProps(dispatch) {
    return {
        log: data => dispatch(logIn(data)),
    };
}

export default connect(mapStateToProps, mapDispathToProps)(LoginPopup);
