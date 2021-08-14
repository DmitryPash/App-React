import React from 'react';
import MyButton from '../Component/UI/button/MyButton';
import MyInput from '../Component/UI/input/MyInput';
import LattestNewsList from '../LattestNewsList/LatestNewsList';

function Input() {
    return (
        <form action="">
            <MyInput type="text" placeholder="Название поста"/>
            <MyInput type="text" placeholder="Описание поста"/>
            <MyButton disabled>Создать пост</MyButton>
        </form>      

    )
}

export default Input;