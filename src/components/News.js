import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>
 {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 

   const fetchMoreData = async () => {
    props.setProgress(15)
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  
      props.setProgress(100)
    };

  const updateNews =   async () =>
   {
    props.setProgress(15)
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    console.log(parsedData)
    props.setProgress(100)

  }

  useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} -Newsies`;
    updateNews();
    // eslint-disable-next-line
  }, [props.country, props.category, props.apiKey, props.pageSize])

  

    return (
        <>
      
      <h1 className='w-[100%] pt-24 py-12 pb-16  flex justify-center text-white text-5xl font-bold '><span className='font-mono'>Newsies </span> - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines </h1>
     {loading && <Spinner />}
     <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner/>}>
      <div className='gap-16 flex mx-24 py-12 pb-10 justify-center w-[88%] overflow-hidden flex-wrap'>   
    
      { articles.map((element)=>{
        return  <NewsItem key={element.url} title={element.title} source={element.source.name} author={element.author? element.author : "Unknown"} date={element.publishedAt} description={element.description} newsURL={element.url} imageURL={element.urlToImage}/>})
      }
      </div>
      </InfiniteScroll>
      <div className='flex py-4 pb-60 px-64 justify-between w-[100%] '>

      </div>
        </>
    )
  }


export default News