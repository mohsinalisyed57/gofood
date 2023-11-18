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
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Router>
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/myorder" element={<MyOrder />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </QueryClientProvider>
      <ToastContainer/>
    </>
  );
}

export default App;
