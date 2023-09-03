import "./index.css"
import './App.css';
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import NewsCard from "./Components/NewsCard"

function App() {
  return (
    <div className="w-screen h-scree flex flex-col ">
      <Nav/>
      <Routes>
        <Route index element={<NewsCard apiUrl="https://inshorts.me/news/all?offset=0&limit=1000"  />} />
        <Route path="/Top" element={<NewsCard apiUrl="https://inshorts.me/news/top?offset=0&limit=1000" />} />
        <Route path="/Hatke" element={<NewsCard apiUrl="https://inshorts.me/news/topics/hatke?offset=0&limit=1000" />} />
        <Route path="/National" element={<NewsCard apiUrl="https://inshorts.me/news/topics/national?offset=0&limit=1000" />} />
        <Route path="/International" element={<NewsCard apiUrl="https://inshorts.me/news/topics/world?offset=0&limit=1000" />} />
        <Route path="/Entertainment" element={<NewsCard apiUrl="https://inshorts.me/news/topics/entertainment?offset=0&limit=1000" />} />
        <Route path="/Business" element={<NewsCard apiUrl="https://inshorts.me/news/topics/business?offset=0&limit=1000" />} />
        <Route path="/startup" element={<NewsCard apiUrl="https://inshorts.me/news/topics/startup?offset=0&limit=1000" />} />
        <Route path="/Trending" element={<NewsCard apiUrl="https://inshorts.me/news/trending?offset=0&limit=1000"/>} />
        <Route path="/Automobile" element={<NewsCard apiUrl="https://inshorts.me/news/topics/automobile?offset=0&limit=1000" />} />
        <Route path="/Science" element={<NewsCard apiUrl="https://inshorts.me/news/topics/science?offset=0&limit=1000" />} />
    </Routes>
    </div>
  );
}

export default App;
