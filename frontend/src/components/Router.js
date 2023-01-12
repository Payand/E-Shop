import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Main from "./MainComponents/Main";
import Product from "./MainComponents/Product";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: [
          <>
            <Main />
          </>,
        ],
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
]);

export default router;
