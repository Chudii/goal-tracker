import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Goals from './pages/Goals/Goals'
import Create from './pages/Create/Create';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goals' element={<Goals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
