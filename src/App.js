import React,{ useState } from 'react';
import "./styles/App.css";
import Filters from "./components/Filters"
import Launches from './components/Launches';

function App() {
  const [data, setData] = useState()
  // console.log(data);
  return (
    <div className="App">
      <Filters setData={setData}/>
      <Launches data={data} />
      <p className="credit">Developed by - Kshitiz</p>
    </div>
  );
}

export default App;
