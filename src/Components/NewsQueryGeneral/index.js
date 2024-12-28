import React from "react"
import { NewsApiContext } from "../Context"
import './index.css'

function NewsQueryGeneral() {
    const {querySearchNews, loading, error} = React.useContext(NewsApiContext)

    const getTitleQuery = () => {
        const currentPath = window.location.href
        let titleQueryPath = currentPath.substring(currentPath.lastIndexOf('=') + 1)
        return titleQueryPath.replace(/%20/g, ' ')
    }
    
    const titleQuery = getTitleQuery()

    const renderQueryNewsLength = () => {
        if(loading) {
            return <p>Estamos cargando</p>
        }
        if(error) {
            return <p>Error desperate</p>
        }
        if(!loading && querySearchNews.length === 0) {
            return(
                <div className="container-title-not-found"><h2>Not found Result</h2></div>
            )
        }
            return(
                <section> 
                    <h2 className="principal-title-query-news">{titleQuery}</h2> 
                    {querySearchNews 
                    .filter(news => news.title !== '[Removed]') 
                    .map((news, index) => (
                         <div key={index} className="card-query-news"> 
                            <div className="container-query-img-news"> 
                                <a href={news.url}> <img src={news.urlToImage} alt={news.title || 'Imagen de noticia'} /> </a> 
                            </div>
                            <div className="container-query-title-news"> 
                                <span>{news.source.name}</span> 
                                <h3 className="title-query-news"> 
                                    <a href={news.url}>{news.title}</a> 
                                </h3> 
                            </div> 
                         </div> 
                    ))} 
                </section>
            )
    }

    return(
        <section className="query-news-section">
            {renderQueryNewsLength()}
        </section>
    )
}

export {NewsQueryGeneral}