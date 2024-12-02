import './index.css'

function Footer() {
    return(
        <footer className="footer-principal">
            <div className="footer-info">
                <div className="footer-subcribe">
                    <ul className='list-footer'>
                        <li>Subscribe</li>
                        <li>Economist Enterprise</li>
                        <li>Reuse our content</li>
                        <li>Help and contact us</li>
                    </ul>
                </div>
                <div className="social-media"></div>
                <div className="phrase-news">
                Published since September 1843 to take part in 
                <span>
                “a severe contest between intelligence, which presses forward, and an unworthy, timid ignorance obstructing our progress.”
                </span>
                </div>
            </div>
            <div className="footer-data-news">
                <div className="news-about-us">
                    <ul className='list-footer'>
                        <li>About</li>
                        <li>Advertise</li>
                        <li>Press centre</li>
                        <li>SecureDrop</li>
                    </ul>
                </div>
                <div className="news-group">
                    <ul className='list-footer'>
                        <li>The Economist Group</li>
                        <li>Economist Intelligence</li>
                        <li>Economist Impact</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export {Footer};