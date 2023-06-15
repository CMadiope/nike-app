import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
const [nav, setNav] = useState(false);

 useEffect(() => {
   nav
     ? (document.body.style.overflow = "hidden")
     : (document.body.style.overflow = "auto");
 }, [nav]);

  return (
    <div >
      <Navbar nav={nav} setNav={setNav}/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
