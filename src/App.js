import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { NewsApiProvider } from "./Components/Context";
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";

const RoutersApp = () => {
  let routers = useRoutes([
    {path: '/',element: <Home/>}
  ])
  return routers
}

function App() {
  // let key = '6e9123d54a31446e82cdd97208d8c7fb'
  
  return (
    <>
    <NewsApiProvider>
      <BrowserRouter>
        <Nav></Nav>
        <RoutersApp></RoutersApp>
        <Footer></Footer>
      </BrowserRouter>
    </NewsApiProvider>
    </>
  );
}

export default App;
