import React, {useState, useEffect} from 'react';
import { News } from '../News/News';
import { getNewsId, getNews } from '../../services/hApi';
import { NewsWrapper } from "./NewsContainerStyle";
import './NewsContainer.scss';

function NewsContainer() {
    const [newsIds, setNewsIds] = useState([]);

    useEffect(() => {
        getNewsId().then(data => setNewsIds(data))
    }, [])

  return (
    <NewsWrapper>
      {newsIds.map(newsId => (
        <News key={newsId} newsId={newsId}/>
      ))}
    </NewsWrapper>
  );
}

export default NewsContainer;  