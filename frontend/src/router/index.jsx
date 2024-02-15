import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import LayoutPublic from '../layout/LayoutPublic';
import { loaderProducts } from '../loaders/loaderProducts';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic/>,
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
                path: "productos",
                element: <Products/>,
                loader: loaderProducts
            }
        ]
    }

])
