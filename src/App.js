import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Like from './Page/Like';
import Personal from './Page/Personal';
import Settings from './Page/Settings';
import Card from './Page/Card';
import Search from './Page/Search';
import Futer from './ComponentsHome/Footer/Futer';
import Header from './ComponentsHome/header/Header';
import "./App.scss"



function App() {
  return (
    <Router>
        <div >
          <Header />
        </div>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/personal-account" element={<Personal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/card" element={<Card />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Futer />

    </Router>
  );
  
}

export default App;
