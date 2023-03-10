import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Root from "./pages/Root/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Menu", element: <Menu /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
