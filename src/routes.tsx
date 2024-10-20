// src/routes.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppHeader from "./components/common/AppHeader";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostFeed from "./pages/PostFeed";
import Planner from "./pages/Planner";
import HotelBooking from "./pages/HotelBooking";

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
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/post-feed",
        element: <PostFeed />,
      },
      {
        path: "/planner",
        element: <Planner />,
      },
      {
        path: "/hotel-booking",
        element: <HotelBooking />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
