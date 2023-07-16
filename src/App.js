import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FavList from './components/FavList'
function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList />} />
        </Routes>
    </div>
  );
}

export default App;


//<Link to="/">Home</Link><