// import { func } from 'prop-types'
import React from 'react'
import Input from '../Input/Input'
import LattestNewsList from '../LattestNewsList/LatestNewsList'

const PostList = ({posts__news, posts__title}) => {

    return (
        <div>
            <h1>{posts__title}</h1>
            <div className='Container__latestsNews'>
                {posts__news.map(posts__news =>
                <LattestNewsList posts__news={posts__news} key={posts__news.id}/> 
                
            )}

            
        </div>
       </div>
    )
}

export default PostList