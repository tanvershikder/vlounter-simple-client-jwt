import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Event from './Pages/Event/Event';
import Blog from './Pages/Blog/Blog';
import Donation from './Pages/Donation/Donation';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/event' element={
          <RequireAuth>
            <Event></Event>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
