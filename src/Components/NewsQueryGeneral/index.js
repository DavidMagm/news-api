import React from "react"
import { NewsApiContext } from "../Context"
import './index.css'

function NewsQueryGeneral() {
    const {querySearchNews} = React.useContext(NewsApiContext)
    const currentPath = window.location.href
    let titleQueryPath = currentPath.substring(currentPath.lastIndexOf('=') + 1)

    const renderQueryNewsLength = () => {
        if(querySearchNews.length === 0) {
            return(
                <div className="container-title-not-found"><h2>Not found Result</h2></div>
            )
        }
        else {
            return(
                <section>
                    <h2 className="principal-title-query-news">{titleQueryPath}</h2>
                    {querySearchNews.map((news, index) => 
                        {return  news.title === '[Removed]' ? []
                            :
                            <div key={index} className="card-query-news">
                                <div className="container-query-img-news">
                                    <a href={news.url}><img src={news.urlToImage} alt=""/></a>
                                </div>
                            
                                <div className="container-query-title-news">
                                    <span>{news.source.name}</span>
                                    <h3 className="title-query-news"><a href={news.url}>{news.title}</a></h3>
                                </div>
                            </div>    
                        }
                    )}
                </section>
            )
        }
    }
    return(
        <section className="query-news-section">
            {renderQueryNewsLength()}
        </section>
    )
}

export {NewsQueryGeneral}