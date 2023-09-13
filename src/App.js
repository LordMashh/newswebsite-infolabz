import React, {Suspense} from "react";
import "./index.css";
import "./App.css";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
const NewsCard = React.lazy(() => import("./Components/NewsCard"));
// import ScrollToTop from "react-scroll-to-top";

// Define a mapping of route paths to API URLs
const routeToAPI = {
  "/": "https://inshorts.me/news/all?offset=0&limit=1000",
  "/All": "https://inshorts.me/news/all?offset=0&limit=1000",
  "/Top": "https://inshorts.me/news/top?offset=0&limit=1000",
  "/Hatke": "https://inshorts.me/news/topics/hatke?offset=0&limit=1000",
  "/National": "https://inshorts.me/news/topics/national?offset=0&limit=1000",
  "/International": "https://inshorts.me/news/topics/world?offset=0&limit=1000",
  "/Entertainment": "https://inshorts.me/news/topics/entertainment?offset=0&limit=1000",
  "/Business": "https://inshorts.me/news/topics/business?offset=0&limit=1000",
  "/startup": "https://inshorts.me/news/topics/startup?offset=0&limit=1000",
  "/Trending": "https://inshorts.me/news/trending?offset=0&limit=1000",
  "/Automobile": "https://inshorts.me/news/topics/automobile?offset=0&limit=1000",
  "/Science": "https://inshorts.me/news/topics/science?offset=0&limit=1000",
  "/Sports": "https://inshorts.me/news/topics/sports?offset=0&limit=1000",
};

function App() {

  return (
    <div className="App">
      <Nav />
      <ScrollToTop/>
        <Routes>
        {Object.entries(routeToAPI).map(([path, apiUrl]) => (
          <Route key={path} path={path} element={
            <Suspense fallback = { <p>loading</p>} >
              <NewsCard apiUrl={apiUrl} />
            </Suspense>
        } />
          ))}
      </Routes>
     
    </div>
  );
}

export default App;
