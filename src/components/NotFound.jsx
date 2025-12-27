import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="nosotros-container">
      <h1>404</h1>
      <p>La página que estás buscando no existe</p>
      <Link to="/home">Volver a Home</Link>
    </div>
  );
}

export default NotFound;
