import React from "react";
//import { NewsApiContext } from "../Context";
import { NewsAdditional } from "./NewsAdditional";
import './index.css'

function SectionNews({dataNews}) {
    let principalNews = dataNews.slice(2,3)
    //console.log(principalNews)
    return(
        <section className="section-news-top-head">
            {principalNews.map((news, index) => (
            <div key={index} className="card-news">
                <div className="card-container-img" rel="noreferrer" target="_blank">
                    <a href={news.url}>
                        <img src={news.urlToImage} alt=""/>
                    </a>
                </div>
                <div className="card-container-title">
                    <div className="card-title">
                        <span>{news.source.name}</span>
                        <p><a href={news.url} rel="noreferrer" target="_blank">{news.title}</a></p>
                    </div>
                </div>
            </div>
            ))}
            <NewsAdditional dataNewsAdditional={dataNews}></NewsAdditional>
        </section>
    )
}

export {SectionNews};