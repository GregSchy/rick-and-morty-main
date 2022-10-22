import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    let [fetchedData, updateFetchData] = useState([]);
    let { id } = useParams();
    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=>{
        (async function() {
          let data = await fetch(api).then((res)=>res.json())
          updateFetchData(data);
        })();
      }, [api]);

    
  return (
    <div>The details of the card are here - {id}</div>
  )
}

export default CardDetails