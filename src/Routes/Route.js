import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <h1>hello</h1>
        }
      ]
    },
  ]);