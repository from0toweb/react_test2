import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approvedNews, deleteNews } from '../../../redux/News/action';
import './NewsItem.sass';

const NewsItem = ({ item: news }) => {
    const userType = useSelector(state => state.popup.userType);
    const newsList = useSelector(state => state.news.newsList);
    const dispatch = useDispatch();

    // ...........................................................
    const approvedHandler = () => {
        dispatch(approvedNews(newsList, news.id));
    };
    const deleteItem = () => {
        dispatch(deleteNews(newsList, news.id));
    };
    return (
        <li className="item news__item">
            {userType === 'admin' && (
                <>
                    <span
                        className="item__icon item__icon--remove"
                        onClick={deleteItem}
                    ></span>
                    {news.status === 'moderation' && (
                        <span
                            className="item__icon item__icon--approve"
                            onClick={approvedHandler}
                        ></span>
                    )}
                </>
            )}

            <h3 className="item__title">{news.newsTitle}</h3>
            <small className="item__date">{news.date}</small>
            <p className="item__text">{news.newsText}</p>
        </li>
    );
};

export default NewsItem;
