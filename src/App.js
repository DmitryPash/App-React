// import React, { Component } from "react";
import React from 'react'
import "./App.css";
import Header from "./Header/Header";
import Input from "./Input/Input";
import LattestNewsList from "./LattestNewsList/LatestNewsList";
import TopNews from "./TopNews/TopNews";
import { useState } from 'react';
import PostList from './PostList/PostList';
// import Componentzxc from "./Componentzxc";
function App(){

  const [posts__news,setPosts__news] = useState([
    {id: 1, title: 'News', body:"Some rnd text from Lorem"},
    {id: 2, title: 'News', body:"Some rnd text from Lorem"},
    {id: 3, title: 'News', body:"Some rnd text from Lorem"},
    {id: 4, title: 'News', body:"Some rnd text from Lorem"},
    {id: 5, title: 'News', body:"Some rnd text from Lorem"},
    {id: 6, title: 'News', body:"Some rnd text from Lorem"},
  ])
  const [posts__news2,setPosts__news2] = useState([
    {id: 1, title: 'News2', body:"Some rnd text from Lorem"},
    {id: 2, title: 'News2', body:"Some rnd text from Lorem"},
    {id: 3, title: 'News2', body:"Some rnd text from Lorem"},
    {id: 4, title: 'News2', body:"Some rnd text from Lorem"},
    {id: 5, title: 'News2', body:"Some rnd text from Lorem"},
    {id: 6, title: 'News2', body:"Some rnd text from Lorem"},
  ])
  return (
    <div className = 'App'>
     <Header></Header>
       <div className='Container'>
       <Input/>
       <TopNews/>
       <PostList posts__news = {posts__news} posts__title = "Javascript" />
       <PostList posts__news = {posts__news2} posts__title = "Prosto 2"/>
      
       
     </div>
     
     
    </div>)
}

export default App;
