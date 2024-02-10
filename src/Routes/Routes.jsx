import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Orders from "../pages/Orders/Orders";
import Services from "../pages/Services/Services";
import AddService from "../pages/AddService/AddService";
import ServiceDetails from "../pages/Services/ServiceDetails/ServiceDetails";

import Blog from "../pages/Blog/Blog";

import Shop from "../pages/Shop/Shop";
import About from "../pages/Home/About/About";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/bookings/:id',
          element: <BookService></BookService>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

          
        },
        {
            path: '/bookings',
            element: <Bookings></Bookings>
        },
        {
          path:'/orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>

        },
        {
          path:'/services',
          element: <Services></Services>
        },
        {
          path:'/addservice',
          element: <AddService></AddService>
        },
        {
          path:'/servicedetails',
          element: <ServiceDetails></ServiceDetails>
        },
       
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path:'/about',
          element: <About></About>
        }
      ]
      
       
    }
    
  ]);

  export default router;