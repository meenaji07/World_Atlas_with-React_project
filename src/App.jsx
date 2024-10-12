import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"

import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AppLayout } from "./Components/AppLayout/AppLayout";
import { Error } from "./pages/Error";
import { CountryDetails } from "./Components/AppLayout/CountryDetails";

const App = () => {

  const router =  createBrowserRouter([
    {
      errorElement: <Error/> ,
      path: '/',
      element:<AppLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "country",
          element: <Country/>
        },
        {
          path: "country/:id",
          element: <CountryDetails/>
        },
      ]
    },  
])

  return (
    <RouterProvider router={router} />
  )
}

export default App;