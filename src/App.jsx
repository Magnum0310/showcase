import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import TodaysSpecials from "./sections/TodaysSpecials";
import Services from "./sections/Services";
import Features from "./sections/features";
import SpecialOffer from "./sections/SpecialOffer";
import Footer from "./sections/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalogue from "./pages/catalogue";
import CarDetails from "./pages/CarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/garage",
    element: <Catalogue />,
  },
  {
    path: "/garage/:carId",
    element: <CarDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
