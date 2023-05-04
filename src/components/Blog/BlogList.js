import React, { useState } from 'react'
import { BlogTitle } from './BlogTitle'
import { BlogSearch } from './BlogSearch'
import { BlogArticles } from './BlogArticles'

export const BlogList = () => {
    const [searchKey, setSearchKey] = useState("");

    const updateSearchKey = (key) => {
        setSearchKey(key);
    };

    return (
        <div>
            <BlogTitle />
            <BlogSearch 
            onUpdate={updateSearchKey}/>
            <BlogArticles />
        </div>
    )
}
