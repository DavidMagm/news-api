import React from "react"
import { NewsApiContext } from "../../Components/Context"
import { SectionNews } from "../../Components/SectionNews"
import { PrincipalNewView } from "../../Components/PrincipalNewView"
import './index.css'

function Home() {
  const {topNews,topNewsBusiness,topNewsTechnology} = React.useContext(NewsApiContext)
    
    return(
        <div className="page-home">
            <PrincipalNewView dataNews={topNews}></PrincipalNewView>
            <SectionNews dataNews={topNews}></SectionNews>
            <SectionNews dataNews={topNewsBusiness}></SectionNews>
            <SectionNews dataNews={topNewsTechnology}></SectionNews>
        </div>
    )
}

export {Home}