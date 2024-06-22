import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Parent from './Pages/Parent';
import Loading from "./Core/Loading";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const NotFound = lazy(() => import("./Core/NotFound"));
const Login = lazy(() => import("./Pages/Login/Login"));
const List = lazy(() => import("./Pages/List"));
const Create = lazy(() => import("./Pages/Create"));
const Update = lazy(() => import("./Pages/Update"));
const FetchDetails = lazy(() => import("./Pages/FetchDetails"));
const Timer = lazy(() => import("./Pages/Timer"));
const Products = lazy(() => import("./Pages/Products"));
const TodoList = lazy(() => import("./Pages/TodoList"));

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Wild card routes */}
            <Route path="/*" element={<NotFound />} />
            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<List />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:studentid" element={<Update />} />
            <Route path="/filter-list" element={<FetchDetails />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/products-list" element={<Products />} />
            <Route path="/products-list" element={<Products />} />
            <Route path="/todo-list" element={<TodoList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <User1/>
      <User2/>
      <Parent/>

      <FetchDetails /> */}
    </div>
  );
}

export default App;
