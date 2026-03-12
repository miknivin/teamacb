import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import OurProducts from "./pages/OurProducts";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: OurProducts },
      { path: "contact", Component: ContactUs }
    ],
  },
]);