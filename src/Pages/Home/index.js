import React from "react"
import { NewsApiContext } from "../../Components/Context"
import { SectionNews } from "../../Components/SectionNews"
import './index.css'

function Home() {
  const {topNews,topNewsBusiness,topNewsTechnology} = React.useContext(NewsApiContext)
  let firstNews = topNews.slice(0,1)
    
    return(
        <div className="page.home">
            <section className="section-principal-news">
                {firstNews.map((news,index) => (
                    <div key={index} className="principal-card-news" style={{width: '100%'}}>
                        <header className="title-news-principal">
                            <h2><a href={news.url} rel="noreferrer" target="_blank">{news.title}</a></h2>
                        </header>
                        <div className="container-img-principal-news">
                            <a href={news.url} rel="noreferrer" target="_blank">
                                <img src={news.urlToImage} alt=""/>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
            <SectionNews dataNews={topNews}></SectionNews>
            <SectionNews dataNews={topNewsBusiness}></SectionNews>
            <SectionNews dataNews={topNewsTechnology}></SectionNews>
        </div>
    )
}

export {Home}