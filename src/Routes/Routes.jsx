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
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'/orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>

        }
      ]
    },
  ]);

  export default router;