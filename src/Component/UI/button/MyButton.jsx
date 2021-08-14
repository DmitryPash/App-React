import React from 'react'
import classes from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
    return (
        // изоляция стиля (посмотри название класса через ф12 на странице)
       <button {...props} className={classes.myBtn}>
           {children} 
       </button>
    )
}

export default MyButton