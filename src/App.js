import { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div className="App">
      <input
        placeholder="Search..."
        className="search-field"
        onChange={(e) => setName(e.target.value)}
      />
      {JSONDATA.filter((value) => {
        if (name == "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(name.toLocaleLowerCase())
        ) {
          return value
        }
      }).map((val, key) => {
        return (
          <ul className="unorder-list">
            <li key={key} className="list-item" >{val.first_name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
