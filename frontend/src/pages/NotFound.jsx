import {useRouteError, Link} from "react-router-dom"

function NotFound() {

    const error = useRouteError();

    console.log(error);

  return (
    <div>
        <h1>NotFound</h1>
        <button><Link to="/">Inicio</Link></button>
        
        </div>
  )
}

export default NotFound