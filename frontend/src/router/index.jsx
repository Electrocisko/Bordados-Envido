import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import LayoutPublic from '../layout/LayoutPublic';
import NotFound from '../pages/NotFound';
import { loaderProducts } from '../loaders/loaderProducts';
import {loaderProductsByCat} from "../loaders/loaderProductsByCat"
import Register from '../pages/Register';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                path:"/",
                element: <Home/>,
                errorElement: <NotFound/>,
            },
            {
                path:"/nosotros",
                element: <About/>,
                errorElement: <NotFound/>,
            },
            {
                path: "/contacto",
                element: <Contact/>,
                errorElement: <NotFound/>,
            },
            {
                path: "/productos",
                element: <Products/>,
                loader: loaderProducts,
                errorElement: <NotFound/>,
            },
            {
                path:"/productos/:cat",
                element: <Products/>,
                loader: loaderProductsByCat,
                errorElement: <NotFound/>,
            },
            {
                path:"/registro",
                element: <Register/>,
                errorElement: <NotFound/>
            }
        ]
    }
])
