import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ListPageLoader, ProfilePageLoader, SinglePageLoader } from "./lib/loaders.js";

import ProfileUpdatePage from "./pages/profile-update-page/ProfileUpdatePage.jsx";
import NewPostPage from "./pages/new-post-page/NewPostPage.jsx";
import ProfilePage from "./pages/profile-page/ProfilePage.jsx";
import {Layout, RequireAuth} from "./pages/layout/Layout.jsx";
import SinglePage from "./pages/single-page/SinglePage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import ListPage from "./pages/list-page/ListPage.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";

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
          loader: ListPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: SinglePageLoader
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
          loader: ProfilePageLoader
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
