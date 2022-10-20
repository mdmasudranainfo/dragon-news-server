import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Routs";

function App() {
  return (
    <div className="">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
