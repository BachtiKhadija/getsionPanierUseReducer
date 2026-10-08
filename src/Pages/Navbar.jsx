import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          My Shop
        </Link>

        <div className="navbar-nav d-flex flex-row">

          <Link className="nav-link mx-2" to="/products">
            Produits
          </Link>

          <Link className="nav-link mx-2" to="/cart">
            Cart
          </Link>

        </div>

      </div>
    </nav>
  );
};
export default Navbar;
