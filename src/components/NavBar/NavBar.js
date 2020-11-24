import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/LoginPopup/actions';
import './NavBar.sass';

const NavBar = ({ modalOpen, setModalOpen }) => {
    const user = useSelector(state => state.popup.userName);
    const dispatch = useDispatch();

    const openModal = () => {
        if (user.length === 0) {
            setModalOpen(true);
        } else {
            dispatch(logOut());
        }
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to="/" className="header__link">
                        Главная
                    </Link>
                    <Link to="/news" className="header__link">
                        Новости
                    </Link>
                </nav>
                <button className="button header__button" onClick={openModal}>
                    {user.length === 0 ? 'Войти' : 'Выйти'}
                </button>
            </div>
        </header>
    );
};

export default NavBar;
