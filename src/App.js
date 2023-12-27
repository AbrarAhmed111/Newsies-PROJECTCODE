import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



const App = () =>  {

  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API


 const settingProgress = (progress) => {
    setProgress(progress);
  }


 
    return (
      <>
      <div className='bg-sky-600 pb-36'> 
    <Router>

      <Navbar/>
      <LoadingBar color='#f11946' progress={progress} height={3}/>      
      <Routes>
        <Route path="/"               element={<News setProgress={settingProgress} apiKey={apiKey} country="in"  key="general"       category="general"      pageSize={9}/>} />
        <Route path="/business"       element={<News setProgress={settingProgress} apiKey={apiKey} country="in"  key="business"      category="business"     pageSize={9}/>} />
        <Route path="/health"         element={<News setProgress={settingProgress} apiKey={apiKey} country="in"  key="health"        category="health"       pageSize={9}/>} />
        <Route path="/entertainment"  element={<News setProgress={settingProgress} apiKey={apiKey} country="in"  key="entertainment" category="entertainment"pageSize={9}/>} />
        <Route path="/sports"         element={<News setProgress={settingProgress} apiKey={apiKey} country="in"  key="sports"        category="sports"       pageSize={9}/>} />
        <Route path="/technology"     element={<News setProgress={settingProgress} apiKey={apiKey} country="in"  key="technology"    category="technology"   pageSize={9}/>} />
      </Routes>

    </Router>
      </div>
      </>
    )
}


export default App