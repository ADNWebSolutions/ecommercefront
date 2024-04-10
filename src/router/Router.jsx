import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Nosotros from "../pages/Nosotros";
import Ofertas from "../pages/Ofertas";
import Productos from "../pages/Productos";

import Contacto from "../pages/Contacto";
import App from "../App";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <div>Página no encontrada</div>, //temporal
        children: [
            { path: '/', element: <App /> },
            { path: '/nosotros', element: <Nosotros /> },
            { path: '/productos', element: <Productos /> },
            { path: '/contacto', element: <Contacto /> },
            { path: '/login', element: <Login /> },
            { path: '/ofertas', element: <Ofertas /> },
        ]
    }
])

export default router