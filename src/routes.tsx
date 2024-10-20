// src/routes.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppHeader from "./components/common/AppHeader";
import Planner from "./pages/Planner";
import HotelBooking from "./pages/HotelBooking";
import TravelMap from "./pages/TravelMap";

// Layout component to include AppHeader on all pages
// const Layout: React.FC = () => {
//   return (
//     <>
//       <AppHeader />
//       <Outlet /> {/* Render the matched child route */}
//     </>
//   );
// };

const router = createBrowserRouter([
  {
    element: <AppHeader />, // Wrap all routes with Layout to include AppHeader
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/travel-map",
        element: <TravelMap />,
      },
      {
        path: "/planner",
        element: <Planner />,
      },
      {
        path: "/hotel-booking",
        element: <HotelBooking />,
      },
      { path: "/travel-booking", element: <Home /> },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
