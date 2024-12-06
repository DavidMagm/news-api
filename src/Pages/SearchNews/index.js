import React from "react"
import { NewsApiContext } from "../../Components/Context"
import { SectionNews } from "../../Components/SectionNews"
import { PrincipalNewView } from "../../Components/PrincipalNewView"

function SearchNews() {
    const {newsCategoryMenu} = React.useContext(NewsApiContext)
    return(
        <div className="page-search-news">
            <PrincipalNewView dataNews={newsCategoryMenu}></PrincipalNewView>
            <SectionNews dataNews={newsCategoryMenu}></SectionNews>
        </div>
    )
}

export {SearchNews}