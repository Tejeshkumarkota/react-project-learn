import './App.css';
import NotFound from './Core/NotFound';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>


          {/* Wild card routes */}
          <Route path="/*" element={<NotFound/>}/>
            {/* <AboutUs/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
