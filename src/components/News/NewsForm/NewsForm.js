import React, { useState } from 'react';
import './NewsForm.sass';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { addNews } from '../../../redux/News/action';

const NewsForm = ({ openNews, setOpenNews }) => {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsText, setNewsText] = useState('');

    const dispatch = useDispatch();

    const newsFormClass = cn('form', 'news__form', {
        'form--active': openNews,
    });

    const disabledBtn = !!newsTitle && !!newsText;

    // .................................................
    const newsSubmit = e => {
        e.preventDefault();
        const date = new Date().toLocaleString();
        dispatch(addNews({ newsTitle, newsText, date }));
        setNewsTitle('');
        setNewsText('');
        setOpenNews(false);
    };

    return (
        <form className={newsFormClass}>
            <input
                type="text"
                className="form__add-title"
                placeholder="Заголовок новости (*обязательно)"
                onChange={e => setNewsTitle(e.target.value)}
                value={newsTitle}
            />
            <textarea
                cols="30"
                rows="10"
                className="form__add-text"
                placeholder="Введите текст новости (*обязательно)"
                onChange={e => setNewsText(e.target.value)}
                value={newsText}
            ></textarea>
            <button
                className="button form__button"
                onClick={newsSubmit}
                disabled={!disabledBtn}
            >
                Добавить
            </button>
        </form>
    );
};

export default NewsForm;
