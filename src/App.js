import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {

  // setData using useState Hooks
  const [data, setData] = useState({ data: [] });

  // This for Pagination

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = Pagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    console.log(e);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  // Fetch api using Promise

  const getRecipes = () => {
    fetch(`https://reqres.in/api/users?page=1&per_page=5`).then((response) => {
      return response.json()
    }).then((actualData) => {
      console.log(actualData.data);
      setData(actualData.data);
    })
      .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      <h2>Web Page For User Detail</h2>
      <div className="app-table">
        {/* Table */}
        {data.map((data) => {
          return <Table id={data.id}
            email={data.email}
            firstName={data.first_name}
            lastName={data.last_name}
            image={data.avatar} />
        })}
      </div>
      {/* Pagination */}
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange} />
    </div>
  );
}

export default App;
