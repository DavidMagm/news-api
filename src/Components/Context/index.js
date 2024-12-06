import React from "react"

const NewsApiContext = React.createContext()

function NewsApiProvider({children}) {
    const [topNews, setTopNews] = React.useState([])
    const [topNewsBusiness, setTopNewsBusiness] = React.useState([])
    const [topNewsTechnology, setTopNewsTechnology] = React.useState([])
    const [newsCategoryMenu, setNewsCategoryMenu] = React.useState([])
    React.useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?category=general&pageSize=10&apiKey=6e9123d54a31446e82cdd97208d8c7fb')
        .then(response => response.json())
        .then(data => setTopNews(data.articles))
      },[])
    
    React.useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?category=business&pageSize=10&apiKey=6e9123d54a31446e82cdd97208d8c7fb')
    .then(response => response.json())
    .then(data => setTopNewsBusiness(data.articles))
    },[])

    React.useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?category=technology&pageSize=10&apiKey=6e9123d54a31446e82cdd97208d8c7fb')
        .then(response => response.json())
        .then(data => setTopNewsTechnology(data.articles))
    },[])

    return(
        <NewsApiContext.Provider value={{topNews,topNewsBusiness,topNewsTechnology,newsCategoryMenu, setNewsCategoryMenu}}>
            {children}
        </NewsApiContext.Provider>
    )
}

export {NewsApiProvider, NewsApiContext}