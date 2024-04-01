import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './components/nav.jsx'
import Card_1 from './components/card_1.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Card_1/>
    <App />
  </React.StrictMode>,
)
