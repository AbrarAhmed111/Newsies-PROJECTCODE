import React from 'react'

const NewsItem = (props) =>
 {
    let {title} = props; //different way for props

    return (
      <>
       <div className='flex flex-col overflow-hidden bg-white w-[350px] rounded-md '>
         <div className='px-2 font-semibold bg-red-500'>{props.source}</div>
         <img className='w-[100%] h-[70%] p-1' src={!props.imageURL?"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png": props.imageURL} alt="" />
        
        <div className='px-1 py-2 w-[100%]  leading-tight'>
         <h1  className='font-bold'>{title}</h1>
         <p   className='text-sm'>{props.description}</p>
         <p   className='mb-4 text-sm font-semibold text-blue-900'>By {props.author} on {new Date(props.date).toGMTString()}</p>
         <a  href= {props.newsURL} rel='noreferrer' target='_blank' className='p-1 px-2 text-sm bg-blue-400 hover:bg-blue-500'>Read more</a>
        </div>
       </div>
      </>
    ) 
}

export default NewsItem