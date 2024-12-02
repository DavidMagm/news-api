import React from "react";
//import { NewsApiContext } from "../Context";
import './NewsAdditional.css'

function NewsAdditional({dataNewsAdditional}) {

    let additionalNewsSection = dataNewsAdditional.slice(3,6)
    return(
        <section className="section-additional-top-head">
            {additionalNewsSection.map((news, index) => (
                <div key={index} className="card-news-additional">
                    <div className="container-title-news-additional">
                        <p><a href={news.url} rel='noreferrer' target="_blank">{news.title === '[Removed]' ? '' : news.title}</a></p>
                        <span>{news.source.name === '[Removed]' ? '' : news.source.name}</span>
                    </div>
                    <div className="container-img-news-additional">
                        <a href={news.url} rel='noreferrer' target="_blank">
                            <img src={news.urlToImage} alt=""/>
                        </a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export {NewsAdditional}