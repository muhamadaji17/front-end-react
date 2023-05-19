// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from './component/shared/Layout';
import Dashboard from './component/pages/Dashboard'
import Customer from './component/pages/Customer'
import Order from './component/pages/Order'
import OrderDetail from './component/pages/OrderDetail'
import ProductCategory from './component/pages/ProductCategory'
import Product from './component/pages/Product'
import User from './component/pages/User'
import AddUser from './component/pages/AddUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/order' element={<Order />} />
        <Route path='/orderdetail' element={<OrderDetail />} />
        <Route path='/product' element={<Product />} />
        <Route path='/productcategory' element={<ProductCategory />} />
        <Route path='/user' element={<User/>} />
        <Route path='/addUser' element={<AddUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
