import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import { Alltasks } from './components/Alltasks';
import { Bottombar } from './components/Bottombar';
import { Donetasks } from './components/Donetasks';
import { Navbar } from './components/Navbar';
import { Pendingtasks } from './components/Pendingtasks';


export function App() {

  const [isPending, setIsPending] = useState(true)
  const [alltasks, setAlltasks] = useState<object | null>(null)
  
  useEffect(() => {
    let data: object
    axios.get("/getalltasks")
    .then((res) => {
      data = res.data
      setAlltasks(data)
      setIsPending(false)
      console.log(data)
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar text='hello'/>
        <Routes>
          <Route path="/" element={isPending ? <Alltasks tasks="Loading..."/> : <Alltasks maindata={alltasks}/>}/>
          <Route path="/pending" element={isPending ? <Pendingtasks tasks="Loading..."/> : <Pendingtasks maindata={alltasks}/>}/>
          <Route path="/done" element={isPending ? <Donetasks tasks="Loading..."/> : <Donetasks maindata={alltasks}/>}/>
        </Routes>
        <Bottombar/>
      </div>
    </Router>
  );
}
