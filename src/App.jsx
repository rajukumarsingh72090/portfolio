import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
// import Themes from './components/Themes'

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   {/* <Themes/> */}
   <Routes>
    <Route index element={<Home/>} />
    <Route path='about' element={<About/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
    <Route path='contact' element={<Contact/>}/>
   </Routes>

     <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="raju-kumar-singh-1ab862360" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/raju-kumar-singh-1ab862360?trk=profile-badge">Raju Kumar Singh</a></div>
              
   </BrowserRouter>
  )
}

export default App
