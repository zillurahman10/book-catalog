import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Header from "../Shared/Header";
import Signup from "../pages/CreateAccount/Signup";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/CreateAccount/Login";
import AllBooks from "../pages/AllBooks/AllBooks";
import BookDetail from "../pages/BookDetail/BookDetail";
import AddBook from "../pages/AddBook/AddBook";
import EditBook from "../pages/EditBook/EditBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/:id",
    element: <BookDetail />,
  },
  {
    path: "/allbooks",
    element: <AllBooks />,
  },
  {
    path: "/editbook/:id",
    element: <EditBook />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
