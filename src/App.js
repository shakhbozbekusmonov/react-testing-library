import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

const Search = ({value, onChange, children }) => (
  <div>
    <label htmlFor="search">{ children }</label>
    <input id="search" type="search" value={value} onChange={onChange} />
  </div>
)

function App() {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
