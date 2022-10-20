//
//
//
//
//
//
//
//
//
//

import { createBrowserRouter } from "react-router-dom";
import Main from "../Compontes/Main/Main";
import Cetagory from "../Compontes/pages/Catagory/Cetagory";
import Home from "../Compontes/pages/Home/Home";
import Login from "../Compontes/pages/Login/Login";
import News from "../Compontes/pages/News/News";
import Register from "../Compontes/pages/Register/Register";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("http://localhost:5000/news"),
      },

      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/catagory",
        element: <Cetagory></Cetagory>,
      },
      {
        path: "/catagory/:id",
        element: <Cetagory></Cetagory>,
        loader: ({ params }) => {
          // console.log(res);
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
