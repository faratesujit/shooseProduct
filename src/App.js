import { AppBar } from "@mui/material";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Product";
import Service from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";
import Added_item from "./components/Added_item";
import { useState } from "react";

import Display from "./Display";

const array = [];
function App() {
  const [value, setValue] = useState(0);

  // function childToParent(value) {
  //   // console.log("hello i am chileToParent function");
  //   // console.log("array===>", value);
  //   return value;
  // }

  return (
    <div>
      {/* <Display /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Header/" element={<PrivateRoute Component={Header} />}>
            <Route path="PRODUCTS" element={<Products array={array} />} />
            <Route path="SERVICES" element={<Service />} />
            <Route path="CONTACTUS" element={<Contact />} />
            <Route path="ABOUTUS" element={<About />} />

            <Route path="Added_item" element={<Added_item array={array} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
