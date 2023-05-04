import React from 'react'

export const BlogArticle = (props) => {
  return (
    <div>
      <div className="blog-cover-photo">
        <img href={props.coverPicture}/>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content.split(/\s+/).slice(0, 30).join(" ")}</p>
        <h4>{props.createdDate}</h4>
      </div>
    </div>
  )
}
