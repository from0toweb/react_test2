import React from 'react';
import { useSelector } from 'react-redux';
import './Main.sass';

const Main = () => {
    const user = useSelector(state => state.popup.userName);
    return (
        <section className="main">
            <div className="container">
                <h1 className="main__title">
                    Привет, {user.length === 0 ? 'Гость' : `${user}`}!
                </h1>
            </div>
        </section>
    );
};

export default Main;
