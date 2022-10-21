import React, { useState, useEffect } from 'react'

function Episode() {
  let [id, setID] = useState(1)
  let api = `https://rickandmortyapi.com/api/episode/1`

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json())
      console.log(data)
    })()
  },[api])

  return (
    <div>The episodes are there.</div>
  )
}

export default Episode