import React, {useState, useEffect} from 'react';
import { News } from '../components/News/News';
import { getNewsId, getNews } from '../services/hApi';
import { NewsWrapper } from "../styles/NewsContainerStyle";

function NewsContainer() {
    const [newsIds, setNewsIds] = useState([]);

    useEffect(() => {
        getNewsId().then(data => setNewsIds(data))
    }, [])

  return (
    <NewsWrapper>
      <p>{JSON.stringify(newsIds)}</p>
      {newsIds.map(newsId => (
        <News key={newsId} newsId={newsId}/>
      ))}
    </NewsWrapper>
  );
}

export default NewsContainer;  