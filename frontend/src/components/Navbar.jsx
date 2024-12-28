import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1>Gerenciador de Produtos</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Lista de Produtos</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastrar Produto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
