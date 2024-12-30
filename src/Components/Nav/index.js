import React from 'react';
import { Link } from 'react-router-dom';
import { NewsApiContext } from '../Context';
import { MenuNav } from '../MenuNav';
import './index.css'

function Nav() {

    const {queryNewsValueInput,setQueryNewsValueInput,setQuerySearchNews,login,setLogin,setLoading,setError} = React.useContext(NewsApiContext)

    const queryNewsSearch = async (query) => { 
        let inputString = query.replace(/\s+/g, '-'); 
        try { 
            setLoading(true); 
            const response = await fetch(`https://newsapi.org/v2/everything?q=${inputString}&pageSize=20&apiKey=6e9123d54a31446e82cdd97208d8c7fb`); 
            const data = await response.json(); 
            setQuerySearchNews(data.articles); 
            setQueryNewsValueInput(''); 
            setLoading(false); 
        } catch (error) { 
            setLoading(false); 
            setError(true); 
        }
    }

    const handleChangeInput = (e) => {
        setQueryNewsValueInput(e.target.value)
    }

    const disabledButton = queryNewsValueInput === ''
    
    return(
        <nav className='nav-container'>
            <ul className='container-left'>
                <Link to={'/'}><li onClick={() => setLogin(false)} className='nav-icon'>NEW API</li></Link>
                <li className={`${login ? 'hidden' : 'nav-menu'}`}>Menu <MenuNav></MenuNav></li>
                <li className='nav-search'>
                    <input className={ login ? 'hidden' : 'visible'} id='query-news' placeholder='Search' value={queryNewsValueInput} onChange={handleChangeInput}/>
                    <Link className={ login ? 'hidden' : 'visible'} to={`/query-news/q?=${queryNewsValueInput}`}>
                        <button className={`${disabledButton ? 'button-query-nav-disabled': 'button-query-nav'}`} 
                        disabled={disabledButton} 
                        onClick={() => queryNewsSearch(queryNewsValueInput)}>Search
                        </button>
                    </Link>
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