import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextEffect from './components/TextEffect'; // Assuming this is the path
import Body from './components/Body';
const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<TextEffect />} />
        {/* <Route path="/abc" element={<Navbar />} /> */}
        <Route path="/main" element={<Body/>} />
      </Routes>
    </Router>
  );
};

export default App;
