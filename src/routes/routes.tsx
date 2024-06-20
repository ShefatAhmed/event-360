import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/dashboard/Dashboard";
import EventItemManagement from "@/pages/dashboard/EventItemManagement";
import RecentEventManagement from "@/pages/dashboard/RecentEventManagement";
import UpdateEventItem from "@/pages/dashboard/UpdateEventItem";
import UpdateRecentEvent from "@/pages/dashboard/UpdateRecentEvent";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "events-item",
        element: <EventItemManagement />,
      },
      {
        path: "recent-events",
        element: <RecentEventManagement />,
      },
      {
        path: "events-item/:id",
        element: <UpdateEventItem />,
      },
      {
        path: "recent-events/:id",
        element: <UpdateRecentEvent />,
      },
    ],
  },
]);

export default router;
