import { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[])
    return (
    <div>
        <h2 className='d-flex justify-content-center mt-3 fs-1'>Latest<span class="badge text-bg-danger ms-2">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
