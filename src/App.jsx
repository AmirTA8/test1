import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import SideBar from './components/SideBar'
import HomeRight from './components/HomeRight'
import Test from './components/test'


function App() {


  return (
    <BrowserRouter>
      <>
        <svg style={{ maxWidth: "30px", marginLeft: '140px', marginTop: '10px', marginBottom: '20px' }} viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp">
          <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        
        
        <div style={{ display: 'flex', gap: '150px' }}>

          <SideBar />

          <div className="vertical"></div>

          <Routes>
            <Route path="Home" element={<Home />} />
            


          </Routes>


          <div className="vertical2"></div>


          
          <Routes>
          <Route path="Home" element={<HomeRight />} />
          
          </Routes>

        </div>
      </>
    </BrowserRouter>
  )
}

export default App
