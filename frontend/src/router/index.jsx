import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import LayoutPublic from '../layout/LayoutPublic';
import NotFound from '../pages/NotFound';
import { loaderProducts } from '../loaders/loaderProducts';
import {loaderProductsByCat} from "../loaders/loaderProductsByCat"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/nosotros",
                element: <About/>
            },
            {
                path: "/contacto",
                element: <Contact/>
            },
            {
                path: "/productos",
                element: <Products/>,
                loader: loaderProducts
            },
            {
                path:"/productos/:cat",
                element: <Products/>,
                loader: loaderProductsByCat
            }
        ]
    }

])
