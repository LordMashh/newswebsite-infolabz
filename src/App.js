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
        <Route index element={<NewsCard apiUrl="https://inshorts.me/news/all"  />} />
        <Route path="/Top" element={<NewsCard apiUrl="https://inshorts.me/news/top" />} />
        <Route path="/Entertainment" element={<NewsCard apiUrl="https://inshorts.me/news/topics/entertainment" />} />
        <Route path="/Trending" element={<NewsCard apiUrl="https://inshorts.me/news/trending"/>} />
        <Route path="/Science" element={<NewsCard apiUrl="https://inshorts.me/news/topics/science" />} />
        <Route path="/Sports" element={<NewsCard apiUrl="https://inshorts.me/news/topics/sports" />} />
      </Routes>
    </div>
  );
}

export default App;
