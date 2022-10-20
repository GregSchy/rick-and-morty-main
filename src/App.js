import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { Cards } from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import { Search } from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")

  let [fetchedData, updateFetchData] = useState([]);
  let { info, results } = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`; 
  

  useEffect(()=>{
    (async function() {
      let data = await fetch(api).then((res)=>res.json())
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="App">
    <Navbar />
      <h1 className="text-center ubuntu my-4">Rick and Morty  <span className="text-primary">WiKi</span> 
      </h1>
    <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
          
            <Filters setSpecies={setSpecies} setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} />
          
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      {/* <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} /> */}
    </div>
  );
}

export default App;
