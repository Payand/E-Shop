import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Main from "./MainComponents/Main";

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
    ],
  },
]);

export default router;
