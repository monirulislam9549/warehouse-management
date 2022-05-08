import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Item from './Pages/Item/Item';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Inventory from './Pages/Inventory/Inventory';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import AddItem from './Pages/AddItem/AddItem';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/item/:itemId' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/inventory' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>

        <Route path='/additem' element={
          <RequiredAuth>
            <AddItem></AddItem>
          </RequiredAuth>
        }></Route>

        <Route path='/manageitem' element={
          <RequiredAuth>
            <ManageItem></ManageItem>
          </RequiredAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequiredAuth>
            <MyItem></MyItem>
          </RequiredAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
