import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:w-5/6 md:w-5/6 mx-auto'>

    <React.StrictMode >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>


  </div>
)
