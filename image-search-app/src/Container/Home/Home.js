import React, { useEffect, useState, useRef } from "react";
import "./Home.css";

const Home = () => {
  const [searchTerm, setTerm] = useState();
  const [res, setRes] = useState([]);
  const Access_Key = "m5icasXFcedUMEoqRYhlYvKGZHET7Ywqtkohgqcn66M";

  useEffect(() => {
    getImages();
  }, []);

  const handleSubmit = () => {
    getImages();
    setTerm();
  };

  const getImages = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${Access_Key}&per_page=18`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search Anything..."
          onChange={(e) => setTerm(e.target.value)}
          onFocus={(e) => {}}
          className="searchInput"
        />
        <br />
        <button className="searchBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>
        <h1 className="heading">Images</h1>
        <div className="Images">
          {res.map((item, index) => {
            return (
              <img
                src={item.urls.small}
                alt={item.description}
                className="eachImg"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
