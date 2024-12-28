import React from 'react';
import { Link } from 'react-router-dom';
import { NewsApiContext } from '../Context';
import { MenuNav } from '../MenuNav';
import './index.css'

function Nav() {

    const {queryNewsValueInput,setQueryNewsValueInput,setQuerySearchNews,login,setLogin,setLoading,setError} = React.useContext(NewsApiContext)

    const queryNewsSearch  = (query) => {
        let inputString = query.replace(/\s+/g, '-')
            setTimeout(() => {
                try {
                    fetch(`https://newsapi.org/v2/everything?q=${inputString}&pageSize=20&apiKey=6e9123d54a31446e82cdd97208d8c7fb`)
                        .then(response => response.json())
                        .then(data => setQuerySearchNews(data.articles))
                    setQueryNewsValueInput('')
                    setLoading(false)
                } catch(error) {
                    setLoading(false)
                    setError(true)
                }
            }, 1000)
    }

    const handleChangeInput = (e) => {
        setQueryNewsValueInput(e.target.value)
    }

    const disabledButton = queryNewsValueInput === ''
    
    const styleButton = {
        backgroundColor: 'grey'
    }
    
        const noneDisplay = {
            display: 'none'
        }
    
    return(
        <nav className='nav-container'>
            <ul className='container-left'>
                <Link to={'/'}><li onClick={() => setLogin(false)} className='nav-icon'>NEW API</li></Link>
                <li style={ login ? noneDisplay : {display: 'flex'}} className='nav-menu'>Menu <MenuNav></MenuNav></li>
                <li className='nav-search'>
                    <input style={ login ? noneDisplay : {display: 'flex'}} id='query-news' placeholder='Search' value={queryNewsValueInput} onChange={handleChangeInput}/>
                    <Link style={ login ? noneDisplay : {display: 'flex'}} to={`/query-news/q?=${queryNewsValueInput}`}><button className='button-query-nav' style={disabledButton ? styleButton: {cursor: 'pointer'}} disabled={disabledButton} onClick={() => queryNewsSearch(queryNewsValueInput)}>Search</button></Link>
                </li>
            </ul>
            <ul className='container-rigth'>
                <li className='nav-free'>Try for free</li>
                <Link to={'/log-in'}><li onClick={() => setLogin(true)} className='nav-login'>Log in</li></Link>
            </ul>
        </nav> 
    )
}

export {Nav};