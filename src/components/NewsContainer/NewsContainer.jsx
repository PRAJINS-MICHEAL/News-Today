import React from 'react'
import './NewsContainer.css'

export default function NewsContainer({title,body,image,category,url}) {
  return (
    <div className='news-container'>
      <div className='info'>
        <div className='news-title'>
         <h2>{title}</h2>
        </div>
        <div className='news-body'>
         <p>{body}</p>
        </div>
        <div className="url">
          <a href={url} target="_blank" >Read more ...</a>
        </div>
      </div>      

      <div className="news-image">
        <img src={image} alt="" />
      </div>

    </div>
  )
}
