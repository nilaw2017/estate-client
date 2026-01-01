import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {Layout, RequireAuth} from "./pages/layout/Layout.jsx";
import ProfilePage from "./pages/profile-page/ProfilePage.jsx";
import ProfileUpdatePage from "./pages/profile-update-page/ProfileUpdatePage.jsx";
import SinglePage from "./pages/single-page/SinglePage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import ListPage from "./pages/list-page/ListPage.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import NewPostPage from "./pages/new-post-page/NewPostPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path:"/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add-post",
          element: <NewPostPage />
        }
      ],
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
