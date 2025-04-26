import { useState } from 'react'
import Search from './Search';
import './App.css'
import Display from './display'

function App() {
  
  const [rep, setRep] = useState({});

  function Upd(e){
    setRep(e)
  }


  return (
    <>
    <div><h1>Weather App</h1></div>
    <div className='search'>
    <Search Upd={Upd}/>
    </div>
    <br></br>
    <div>
      <Display rep={rep}/>
    </div>
    

    </>
  );
}

export default App
