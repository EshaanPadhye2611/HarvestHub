import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Homepage/HomePage'
import ConsumerPage from './pages/ConsumerPage/ConsumerPage';
import RetailerPage from './pages/RetailerPage/RetailerPage';

import DailyPrice from './pages/DailyPricePage/DailyPrice';
import FoodDetection from './pages/FoodDetection/FoodDetection';
import Recipe from './pages/Recipe/Recipe';
import FoodDonation from './pages/FoodDonation/FoodDonation';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consumer" element={<ConsumerPage />} />
          <Route path="/retailer" element={<RetailerPage />} />
          <Route path="/daily-price" element={<DailyPrice/>} />
          <Route path="/FoodDetection" element={<FoodDetection/>} />
          <Route path="/recipe" element={<Recipe/>} />
          <Route path="/donation" element={<FoodDonation/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
