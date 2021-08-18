// import { func } from 'prop-types'
import React from 'react'

const LattestNewsList = (props) => {

    return (
        <div className="Lattest__News">
            <h2>{props.number}. {props.posts__news.title}</h2>
            <div className='Lattest__News__List'>
                <div className="blocks__news">{props.posts__news.body}</div>
            </div>
        </div>
    )
}

export default LattestNewsList