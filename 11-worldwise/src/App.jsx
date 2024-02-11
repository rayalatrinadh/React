import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing  from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
function App() {

  
  return (

    <BrowserRouter>
    
      <Routes>
        <Route index element = {<Homepage />} />
        <Route path = "product" element = {<Product />} />
        <Route path = "/pricing" element = {<Pricing />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "app" element = {<AppLayout />} >
          <Route index element = {<p>Lis of cities</p>} />
          <Route path = "cities" element = {<p>List of Cities</p>} />
          <Route path = "countries" element = {<p>Countries</p>} />
          <Route path = "form" element = {<p>Form</p>} />
        </Route>
        <Route path = "*" element = {<PageNotFound />} />
      </Routes>
    
    </BrowserRouter>
 
  );
}

export default App
