import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [movie, setmovie] = useState([])


  useEffect(()=>{
    axios.get('https://backend-8e9k.vercel.app/api/movie')
    .then((res)=>{
      setmovie(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  })

  return (
    <>
      <h1>Movies Name</h1>
      <h2>Total Movies : {movie.length}</h2>
      {
        movie.map((er)=>(
          <div key={er.id}>
            <h3>Movie Name :{er.name}</h3>
            <h4>Year :{er.year}</h4>
          </div>
        ))
      }

    </>
  )
}

export default App
