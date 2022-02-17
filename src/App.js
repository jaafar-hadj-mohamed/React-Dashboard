import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";
import {  BrowserRouter ,  Routes,  Route} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";




function App() {
  return (
    <BrowserRouter>
     <Topbar/>
    <div className="container">
      <Sidebar/>
      <Routes>
          
        <Route  path="/" element={<Home />}>
            
        </Route>
        <Route  path="/users" element={<UserList />}>
            
        </Route>
        <Route  path="/user/:userId" element={<User />}>
            
        </Route>
        <Route  path="/newUser" element={<NewUser />}>
            
        </Route>
        <Route  path="/products" element={<ProductList />}>
        </Route>
        <Route  path="/product/:ProductId" element={<Product />}>
        </Route> 
        
        <Route  path="/newproduct" element={<NewProduct/>}>
            
        </Route>
          
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
