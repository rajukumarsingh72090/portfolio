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
   </BrowserRouter>
  )
}

export default App
