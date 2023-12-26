import './App.css';
import Signup from "./modules/user/signup/signup";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductList from './ui/layout/Products/ProductList';
import Login from './modules/user/login/login';
import Navbar from './ui/layout/Navbar/Navbar';
import Analytics from './ui/layout/DaschBoard/Analytics';
import Setting from './modules/user/Setting/Setting';

import Logout from './modules/user/Logout/Logout';
import ContactUs from './Pages/ContactUs';
import Cart from './ui/layout/cart/Cart';
import Profile from './modules/user/Profile/Profile';
import Password from './modules/user/Setting/Password';
import Information from './modules/user/Setting/Information';
import DeleteAccount from './modules/user/Setting/DeleteAccount';
import PageNotFound from './Pages/404PageNotFound';
import CartBill from './ui/layout/cart/CartBill/CartBill';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path='/home'element={<Home></Home>}></Route> 
      <Route path='/signup'element={<Signup></Signup>}></Route>
      <Route path='/'element={<Login></ Login>}></Route>
      <Route path='/list'element={<ProductList></ProductList>}></Route>
      <Route path='/navigation'element={<Navbar></Navbar>}></Route>
      <Route path='/profile'element={<Profile/>}></Route>
      <Route path='/logout'element={<Logout/>}></Route>
      <Route path='/analytics' element={<Analytics></Analytics>}></Route>
      <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
      <Route path='/cart' element={<Cart ></Cart>}></Route>
      <Route path='/password' element={<Password></Password>}></Route>
      <Route path='/setting' element={<Setting></Setting>}></Route>
      <Route path='/profile/setting' element={<Information></Information>}></Route>
      <Route path='/deleteAccount' element={<DeleteAccount></DeleteAccount>}></Route>
      <Route path='/PageNotFound' element={<PageNotFound></PageNotFound>}></Route>
      <Route path='/CartBill' element={<CartBill></CartBill>}></Route>


    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
