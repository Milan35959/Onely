
// import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import HowItWork from "./components/HowItWork"
import Pricing from "./components/Pricing"
import Faq from "./components/Faq"
import Login from "./components/Login"
import { Routes, Route, useLocation } from "react-router-dom";
import Start from "./components/Start"
import Register from "./components/pages/Register"

function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home/>
  //   },
  //   {
  //     path:"/howtowork",
  //     element:<HowItWork/>
  //   },
  //   {
  //     path:"/pricing",
  //     element:<Pricing/>
  //   },
  //   {
  //     path:"/faq",
  //     element:<Faq/>
  //   },
  //   {
  //     path:"/login",
  //     element:<Login/>
  //   },

  // ])

  const location=useLocation();

  const HideNavbarFooter=["/login","/start","/register"]

  const ShouldHideNavbarFooter=HideNavbarFooter.includes(location.pathname);

  return (
    <>
    
      {!ShouldHideNavbarFooter && <Navbar />}
    {/* <RouterProvider router={router}/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howtowork" element={<HowItWork />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      
    
      {!ShouldHideNavbarFooter && <Footer />}
    </>
  )
}

export default App
