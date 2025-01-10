import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import HomePage from './pages/Homepage/HomePage'
import ConsumerPage from './pages/ConsumerPage/ConsumerPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consumer" element={<ConsumerPage/>} />
        
      </Routes>
    </Router>
  )
}

export default App
