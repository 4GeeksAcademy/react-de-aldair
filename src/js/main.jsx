import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron.jsx'
import Card from './components/Card.jsx'
//import Navbar from './Navbar.jsx'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
//import Home from './components/Home';

//import App from '../App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Jumbotron/>
    <Card/>
    <Footer/>
  </React.StrictMode>,
)
