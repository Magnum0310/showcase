import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import TodaysSpecials from "./sections/TodaysSpecials";
import Services from "./sections/Services";
import Features from "./sections/features";
import SpecialOffer from "./sections/SpecialOffer";
import Footer from "./sections/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalogue from "./pages/catalogue";
import CarDetails from "./pages/CarDetails";
import AccordionPage from "./components/Accordion";
import PagesLayout from "./layouts/PagesLayout";
import Location from "./components/Location";
import About from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import { ScrollRestoration } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/garage",
//     element: <Catalogue />,
//   },
//   {
//     path: "/garage/:carId",
//     element: <CarDetails />,
//   },
//   {
//     path: "/faq",
//     element: <AccordionPage />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PagesLayout />}>
      <Route index element={<HomePage />} />
      <Route path="garage">
        <Route index element={<Catalogue />} />
        <Route path=":carId" element={<CarDetails />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="faq" element={<AccordionPage />} />
      <Route path="contact" element={<Location />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
