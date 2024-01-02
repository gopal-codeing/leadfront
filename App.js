
// import React from 'react';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import Datacomponent from './Datacomponent';


function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.quicksell.co/v1/internal/frontend-assignment?page=${currentPage}`);
      // const result = await response.json();
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
    
  };

  console.log(data);
  if(data){
  return (
   <div className="App">
  <h1>Frontend Assignment</h1>
   <Datacomponent data={data}/>
  <button  onClick={handleNextPage}>Next Page</button> 
  </div>)
  }
  else{
  return (
    <>
    <div className="App">
      <h1>Frontend Assignment</h1>
     
    </div>
    </>
  )
  }
}


export default App;
