import React from 'react';
import { Link } from 'react-router-dom';
import { NewsApiContext } from '../Context';
import './index.css'



function MenuNav() {

    const {setNewsCategoryMenu} = React.useContext(NewsApiContext)

    const newsSearchBusinnes  = async (category) => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apikey=6e9123d54a31446e82cdd97208d8c7fb`)
        const data = await response.json()
        setNewsCategoryMenu(data.articles)
    }


    return(
        <div className='menu-news'>
            <ul className='container-menu-news'>
                <Link to={`/search-news/business`}><li onClick={(e) => newsSearchBusinnes(e.target.innerText)}>business</li></Link>
                <Link to={`/search-news/entertainment`}><li onClick={(e) => newsSearchBusinnes(e.target.innerText)}>entertainment</li></Link>
                <Link to={`/search-news/general`}><li onClick={(e) => newsSearchBusinnes(e.target.innerText)}>general</li></Link>
                <Link to={`/search-news/health`}><li onClick={(e) => newsSearchBusinnes(e.target.innerText)}>health</li></Link>
            </ul>
            <ul className='container-menu-news'>
                <Link to={`/search-news/science`}><li onClick={(e) => newsSearchBusinnes(e.target.innerText)}>science</li></Link>
                <Link to={`/search-news/sports`}><li onClick={(e) => newsSearchBusinnes(e.target.innerText)}>sports</li></Link>
                <Link to={`/search-news/technology`}><li onClick={(e) => newsSearchBusinnes(e.target.innerText)}>technology</li></Link>
            </ul>
        </div>
    )
}

function Nav() {

    const {queryNewsValueInput,setQueryNewsValueInput,setQuerySearchNews} = React.useContext(NewsApiContext)

    const queryNewsSearch  = async (query) => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=20&apiKey=6e9123d54a31446e82cdd97208d8c7fb`)
        const data = await response.json()
        setQuerySearchNews(data.articles)
        setQueryNewsValueInput('')
    }

    const handleChangeInput = (e) => {
        setQueryNewsValueInput(e.target.value)
    }
    
    return(
        <nav className='nav-container'>
            <ul className='container-left'>
                <Link to={'/'}><li className='nav-icon'>NEW API</li></Link>
                <li className='nav-menu'>Menu <MenuNav></MenuNav></li>
                <li className='nav-search'>
                    <input id='query-news' placeholder='Search' value={queryNewsValueInput} onChange={handleChangeInput}/>
                    <Link to={`/query-news/q?=${queryNewsValueInput}`}><div className='button-query-nav' onClick={() => queryNewsSearch(queryNewsValueInput)}>Search</div></Link>
                </li>
            </ul>
            <ul className='container-rigth'>
                <li className='nav-free'>Try for free</li>
                <li className='nav-login'>Log in</li>
            </ul>
        </nav> 
    )
}

export {Nav};