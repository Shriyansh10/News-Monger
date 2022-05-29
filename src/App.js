import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News'
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state= {
    progress: 0
  }

  apiKey=process.env.REACT_APP_API_KEY
  setProgress =(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}        
          />
            <Navbar />
            <Routes> 
                <Route exact path="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="top" category="top"/>}></Route>
                <Route exact path="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business"/>}></Route>
                <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"  category="entertainment"/>}></Route>
                <Route exact path="/environment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="environment"  category="environment"/>}></Route>
                <Route exact path="/food"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="food"  category="food"/>}></Route>
                <Route exact path="/health"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health"  category="health"/>}></Route>
                <Route exact path="/politics"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="politics"  category="politics"/>}></Route>
                <Route exact path="/science"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science"  category="science"/>}></Route>
                <Route exact path="/sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"  category="sports"/>}></Route>
                <Route exact path="/technology"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology"  category="technology"/>}></Route>
                <Route exact path="/world"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="world"  category="world"/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
  }
}
