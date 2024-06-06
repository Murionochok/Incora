import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./normalize.css";

import UserPosts from "./pages/UserPosts/UserPosts";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Users from "./components/Users/Users";
import App from "./pages/App/App";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/:id/posts",
        element: <UserPosts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Provider store={store}>
      <RouterProvider router={route} />
      {/* <Footer /> */}
    </Provider>
  </React.StrictMode>
);
