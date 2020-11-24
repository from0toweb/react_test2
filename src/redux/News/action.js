import { ADD_NEWS, APPROVED_NEWS, DELETE_NEWS } from './types';

export const addNews = newsData => {
    return {
        type: ADD_NEWS,
        payload: newsData,
    };
};

export const deleteNews = (newsData, id) => {
    const result = newsData.filter(news => news.id !== id);
    return {
        type: DELETE_NEWS,
        payload: result,
    };
};

export const approvedNews = (newsData, id) => {
    const result = newsData.map(news => {
        if (news.id === id) {
            news.status = 'approved';
        }
        return news;
    });
    return {
        type: APPROVED_NEWS,
        payload: result,
    };
};
