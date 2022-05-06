import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ }> </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
