import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CartProvider } from './components/ContextReducer';
import { QueryClient, QueryClientProvider } from "react-query";
import Home from './screens/Home/Home.js';
import Login from './screens/Login/Login.js';
import Signup from './screens/SignUp/Signup.js';
import MyOrder from './screens/MyOrder/MyOrder.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './Admin/Dashboard/AdminDashboard.js';
import Dashboard from './Admin/Dashboard/Component/Dashboard.js';
import AddProduct from './Admin/Dashboard/Product/AddProduct.js';
import UpdateProduct from './Admin/Dashboard/Product/EditProduct.js';
import ViewProduct from './Admin/Dashboard/Product/ViewProduct.js';
import RemoveProduct from './Admin/Dashboard/Product/RemoveProduct.js';
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Router>
              <Routes>
              <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/myorder" element={<MyOrder />} />
              <Route path="/admin/*" element={<AdminDashboard />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="update-product" element={<UpdateProduct />} />
                <Route path="view-product" element={<ViewProduct/>} />
                <Route path="remove-product" element={<RemoveProduct/>} />
                {/* Add more nested routes as needed */}
              </Route>
              </Routes>
          </Router>
        </CartProvider>
      </QueryClientProvider>
      <ToastContainer/>
    </>
  );
}

export default App;
