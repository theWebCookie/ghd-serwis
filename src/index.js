import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App';
import './index.css';
import MainPage from './components/pages/MainPage';
import RepairPage from './components/pages/RepairPage';
import OffertsPage from './components/pages/OffertsPage';
import RegulationsPage from './components/pages/RegulationsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/naprawa",
        element: <RepairPage />,
      },
      {
        path: "/zakup",
        element: <OffertsPage />,
      },
      {
        path: "/regulamin",
        element: <RegulationsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
