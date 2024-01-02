// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Datacomponent = ({data}) => {
    
  console.log(data)
  if(data.length)
  return (
    <div>
     
        <div>
          <h1>Data from API</h1>
          <ul>
            {data.tickets.map((item) => (
             <li key={item.id}>{item.name}</li> 
            ))}
          </ul>
        </div>
      
    </div>
  );
};

export default Datacomponent;