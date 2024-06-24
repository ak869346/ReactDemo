import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './Topbar.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
function App() {
  return (
    <div>
      <Topbar/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
