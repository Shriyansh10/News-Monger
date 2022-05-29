import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News'
import React from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

const App = () => {

  let apiKey = process.env.REACT_APP_API_KEY

  const [progress, setProgress] = useState(0)
 

    return (
      <div>
        <BrowserRouter>
          <LoadingBar
          color='#f11946'
          progress={progress}        
          />
            <Navbar />
            <Routes> 
                <Route exact path="/"  element={<News setProgress={setProgress} apiKey={apiKey} key="top" category="top"/>}></Route>
                <Route exact path="/business"  element={<News setProgress={setProgress} apiKey={apiKey} key="business" category="business"/>}></Route>
                <Route exact path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment"  category="entertainment"/>}></Route>
                <Route exact path="/environment"  element={<News setProgress={setProgress} apiKey={apiKey} key="environment"  category="environment"/>}></Route>
                <Route exact path="/food"  element={<News setProgress={setProgress} apiKey={apiKey} key="food"  category="food"/>}></Route>
                <Route exact path="/health"  element={<News setProgress={setProgress} apiKey={apiKey} key="health"  category="health"/>}></Route>
                <Route exact path="/politics"  element={<News setProgress={setProgress} apiKey={apiKey} key="politics"  category="politics"/>}></Route>
                <Route exact path="/science"  element={<News setProgress={setProgress} apiKey={apiKey} key="science"  category="science"/>}></Route>
                <Route exact path="/sports"  element={<News setProgress={setProgress} apiKey={apiKey} key="sports"  category="sports"/>}></Route>
                <Route exact path="/technology"  element={<News setProgress={setProgress} apiKey={apiKey} key="technology"  category="technology"/>}></Route>
                <Route exact path="/world"  element={<News setProgress={setProgress} apiKey={apiKey} key="world"  category="world"/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
  }
export default App