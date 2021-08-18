import React from 'react';
import MyButton from '../Component/UI/button/MyButton';
import MyInput from '../Component/UI/input/MyInput';
import LattestNewsList from '../LattestNewsList/LatestNewsList';
import {useState, useRef} from 'react';
const Input = () => {



    

    return (
        <form action="">
            {/* <MyInput 
                value = {title}
                onChange = {e => setTitle(e.target.value)}
                type="text" 
                placeholder="Название поста"
            />
             <MyInput 
                value = {body}
                onChange = {e => setBody(e.target.value)}
                type="text" 
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton> */}
        </form>      

    )
}

export default Input;