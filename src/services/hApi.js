import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getNews = async (newsId) => {
    const result = await axios
    .get(`${storyUrl + newsId}.json`)
    .then(({ data }) => data)
    return result;
};

export const getNewsId = async () => {
    const result = await axios.get(newStoriesUrl).then((data) => data);
    return result.data;
};