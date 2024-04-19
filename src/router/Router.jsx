import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../App";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Offers from "../pages/Offers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <div>Página no encontrada</div>, //temporal
        children: [
            { path: '/', element: <App /> },
            { path: '/nosotros', element: <AboutUs /> },
            { path: '/productos', element: <Products /> },
            { path: '/contacto', element: <Contact /> },
            { path: '/login', element: <Login /> },
            { path: '/ofertas', element: <Offers /> },
        ]
    }
])

export default router