// import React, { Component } from "react";
import React from 'react'
import "./App.css";
import Header from "./Header/Header";
import Input from "./Input/Input";
import LattestNewsList from "./LattestNewsList/LatestNewsList";
import TopNews from "./TopNews/TopNews";
import { useState } from 'react';
import PostList from './PostList/PostList';
import MyInput from './Component/UI/input/MyInput';
import MyButton from './Component/UI/button/MyButton';
// import Componentzxc from "./Componentzxc";
function App(){

  const [posts__news,setPosts__news] = useState([
    {id: 1, title: 'News', body:"Some rnd text from Lorem"},
    {id: 2, title: 'News', body:"Some rnd text from Lorem"},
    {id: 3, title: 'News', body:"Some rnd text from Lorem"},

  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body,
        }
        setPosts__news([...posts__news, newPost])
        setTitle('')
        setBody('')
        console.log(newPost)
        // console.log(bodyInputRef.current.value)
    }


  return (
    <div className = 'App'>
     <Header></Header>
       <div className='Container'>
       <MyInput 
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
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
       <Input/>
       <TopNews/>
       <PostList posts__news = {posts__news} posts__title = "Javascript" />
        
     </div>
    </div>)
}

export default App;
