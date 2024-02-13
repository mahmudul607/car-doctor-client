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
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import NoData from "../pages/Share/NoData/NoData";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
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
          path:'/services/:id',
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params})=> fetch(`https://car-doctor-server-one-gamma-38.vercel.app/services/${params.id}`)

          
        },
        {
          path: '/cars/:id',
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-one-gamma-38.vercel.app/cars/${params.id}`)

        },
        {
            path: '/bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
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
        },
        {
          path:'/nodata',
          element:<NoData></NoData>
        }
      ]
      
       
    }
    
  ]);

  export default router;