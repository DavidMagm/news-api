import { Link } from 'react-router-dom'
import React from 'react'
import { NewsApiContext } from '../Context'
import './index.css'

function CardDataUser({router, nameButton}) {
    const {setLogin} = React.useContext(NewsApiContext)
    const menuRender = () => {
        if(nameButton === 'Login') {
            setLogin(false)
        }
    }
    return (
        <form className="card-data-user">
            <label htmlFor="email-user">Email</label>
            <input className='data-input-login' id="email-user" type="text"/>
            <label htmlFor="password-user">Password</label>
            <input className='data-input-login' id="password-user" type="password"/>
            <Link className='button-login' to={router}><button onClick={menuRender}>{nameButton}</button></Link>
        </form>
    )
}

export {CardDataUser}