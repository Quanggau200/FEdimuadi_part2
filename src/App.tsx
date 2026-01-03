
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./route";
import {Suspense} from "react";

function App() {
    const route= createBrowserRouter(routes())
  return (
    <Suspense >
        <RouterProvider router={route}/>
    </Suspense >
  )
}

export default App
