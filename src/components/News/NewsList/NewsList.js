import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.sass';

const NewsList = () => {
    const newsList = useSelector(state => state.news.newsList);
    const userType = useSelector(state => state.popup.userType);
    const [filtredNews, setFiltredNews] = useState([]);
    const [fitredValue, setFiltredValue] = useState('');
    const approvedList = filtredNews.filter(news => news.status === 'approved');

    useEffect(() => {
        setFiltredNews(newsList);
    }, [newsList]);

    useEffect(() => {
        const result = newsList.filter(news =>
            news.newsText.toLowerCase().includes(fitredValue)
        );
        setFiltredNews(result);
    }, [fitredValue, newsList]);

    return (
        <>
            <input
                type="text"
                className="news__search"
                placeholder="&#128270; Поиск по новостям"
                onChange={e => setFiltredValue(e.target.value)}
                value={fitredValue}
            />
            <ul className="news__list">
                {newsList.length === 0
                    ? null
                    : userType !== ''
                    ? filtredNews.map(item => (
                          <NewsItem key={item.id} item={item} />
                      ))
                    : approvedList.map(item => (
                          <NewsItem key={item.id} item={item} />
                      ))}
            </ul>
        </>
    );
};

export default NewsList;
