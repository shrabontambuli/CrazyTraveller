import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Error from './Components/Error/Error.jsx';
import Destination from './Pages/Destination/Destination.jsx';
import Tours from './Pages/Tours/Tours.jsx';
import Details from './Pages/Destination/Details.jsx';
import Shop from './Pages/Shop/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/destination",
        element: <Destination />
      },
      {
        path: "/tour",
        element: <Tours />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/details/:_id",
        element: <Details />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
