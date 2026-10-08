
import {Link} from 'react-router-dom';
const Navbar=()=>{
<nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">My Shop</Link>
     
      <div className='navbar-nav'>
          <link className='nav-link' to="/products">Produits</link>
          <link className='nav-link' to="/cart">Cart</link>






      </div>
       </div>


</nav>




}

export default Navbar;