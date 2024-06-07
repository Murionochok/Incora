import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./normalize.css";

import UserPosts from "./pages/UserPosts/UserPosts";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Users from "./components/Users/Users";
import App from "./pages/App/App";
import Post from "./pages/Post/Post";

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
      {
        path: "/:uid/posts/:pid",
        element: <Post />,
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
