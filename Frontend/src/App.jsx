import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Homepage/HomePage'
import ConsumerPage from './pages/ConsumerPage/ConsumerPage';
import RetailerPage from './pages/RetailerPage/RetailerPage';
import Producer from './pages/Producer/Producer';
import DailyPrice from './pages/DailyPricePage/DailyPrice';


function App() {
  return (
    <Router>
      <div className="bg-green-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consumer" element={<ConsumerPage />} />
          <Route path="/retailer" element={<RetailerPage />} />
          <Route path="/producer" element={<Producer />} />
          <Route path="/daily-price" element={<DailyPrice/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
