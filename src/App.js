import Register from "./components/pages/Regster";
import { Route, Routes, Router, BrowserRouter} from 'react-router-dom';
import Login from "./components/pages/Login";
import MainNavigation from "./components/layout/MainNavigation";
import NotFoundPage from "./components/pages/NotFoundPage";
import HomePage from "./components/pages/Home";

 

function App() {
  return (
    <BrowserRouter>
    <MainNavigation/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}> </Route>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
       
      </Routes>
   
    </BrowserRouter> 
   
  );
}

export default App;
