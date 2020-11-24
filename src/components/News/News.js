import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './News.sass';
import NewsForm from './NewsForm/NewsForm';
import NewsList from './NewsList/NewsList';

const News = () => {
    const [openNews, setOpenNews] = useState(false);
    const userType = useSelector(state => state.popup.userType);

    return (
        <section className="news">
            <div className="container">
                {userType === 'user' && (
                    <>
                        <button
                            className="button news__button"
                            onClick={() => setOpenNews(!openNews)}
                        >
                            Добавить новость
                        </button>
                        <NewsForm
                            openNews={openNews}
                            setOpenNews={setOpenNews}
                        />
                    </>
                )}

                <NewsList />
            </div>
        </section>
    );
};

export default News;
