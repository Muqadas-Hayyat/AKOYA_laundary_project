import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import BookNow from './Pages/BookNow'
import { useEffect } from 'react';




function Layout({ children }) {
  const location = useLocation()

  // Pages where you DON'T want Navbar & Footer
  const hideLayout = ['/login', '/sign-up'].includes(location.pathname)

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}

function App() {

  useEffect(() => {
  AOS.init({ duration: 1000, once: false });
}, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/book-now" element={<BookNow/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
