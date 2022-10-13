import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Goals from './components/Goals/Goals'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goals' element={<Goals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
