import React from "react"
//import { NewsApiContext } from "../Context"
import './index.css'

function PrincipalNewView({dataNews}) {
    
    let firstNews = dataNews.slice(0,1)

    return(
        <section className="section-principal-news">
            {firstNews.map((news,index) => (
                <div key={index} className="principal-card-news" style={{width: '100%'}}>
                    <header className="title-news-principal">
                        <h2><a href={news.url} rel="noreferrer" target="_blank">{news.title === '[Removed]' ? '' : news.title}</a></h2>
                    </header>
                    <div className="container-img-principal-news">
                        <a href={news.url} rel="noreferrer" target="_blank">
                            <img src={news.urlToImage} alt=""/>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export {PrincipalNewView}