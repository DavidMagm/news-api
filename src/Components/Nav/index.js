import './index.css'
function Nav() {
    return(
        <nav className='nav-container'>
            <ul className='container-left'>
                <li className='nav-icon'>NEW API</li>
                <li className='nav-menu'>Menu</li>
                <li className='nav-search'><input placeholder='Search'/></li>
            </ul>
            <ul className='container-rigth'>
                <li className='nav-free'>Try for free</li>
                <li className='nav-login'>Log in</li>
            </ul>
        </nav> 
    )
}

export {Nav};