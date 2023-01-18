import "./App.css";
import Page from "./components/page";
import { useState, useEffect } from "react";
function App() {
  const [data, setdata] = useState([]);
  const [query, setquery] = useState("aesthetic");
  const [search, setsearch] = useState("");

  useEffect(() => {
    getdata();
  }, [query]);
  const getdata = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=AhUIn8vy-d1agOsPkXMUQaee72cMyTKeKoRTEGr8dGs`
    );
    console.log(response);
    const data = await response.json();
    // console.log(data.results);

    setdata(data.results);

    // getRepo(query);
  };

  const updateSearch = (e) => {
    setsearch(e.target.value);
    // console.log(e.target.value);
  };
  function getSearch(e) {
    e.preventDefault();
    setquery(search);

    setsearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input
          type="search"
          placeholder="Search it!"
          value={search}
          onChange={updateSearch}
          className="search-bar"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="container">
        {data.map((item, key) => (
          <Page
            keys={key}
            dloads={item.urls.download}
            url={item.urls.small}
            users={item.user.name}
            created={item.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
