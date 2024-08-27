import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CalculatorPage from './pages/CalculatorPage'
import QuranPage from './pages/QuranPage'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<QuranPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
