import React from 'react'
import { blogData } from './BlogData/blogData'
import { BlogArticle } from './BlogArticle'

export const BlogArticles = () => {
  return (
    <div>
      {blogData.map(article =>
        <BlogArticle
          key={article.id}
          id={article.id}
          title={article.title}
          category={article.category}
          subCategory={article.subCategory}
          content={article.content}
          converPicture={article.coverPicture}
          createdDate={article.createdDate}
        />)}
    </div>
  )
}
