import './App.css';
import NotFound from './Core/NotFound';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import List from './Pages/List';
import Create from './Pages/Create';
import User1 from './Pages/User1';
import User2 from './Pages/User2';
import Parent from './Pages/Parent';
import Update from './Pages/Update';
import FetchDetails from './Pages/FetchDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          {/* Wild card routes */}
          <Route path="/*" element={<NotFound/>}/>
          {/* Auth */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit/:studentid" element={<Update/>}/>
          <Route path="/filter-list" element={<FetchDetails/>}/>
        </Routes>
      </BrowserRouter>

      {/* <User1/>
      <User2/>
      <Parent/>

      <FetchDetails /> */}
    </div>
  );
}

export default App;
