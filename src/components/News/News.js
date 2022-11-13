/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getNews, getNewsId } from '../../services/hApi';

export const News = ({newsId}) => {
    const [news, setNews] = useState({});
    
    useEffect(() => {
        getNews(newsId).then(data => data && data.url && setNews(data));
    }, []);

  return news && news.url ? (
    <>
    <a href={news.url}>
    <p>{news.title}</p>
    </a>
    By: <p>{news.by}</p>
    Posted: <p>{news.time}</p>
    </>
  ) : null;
};

