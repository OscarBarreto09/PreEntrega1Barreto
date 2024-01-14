import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link className='Link' to="/">Automoviles</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='Link' to='/category/Bmw'eventkey="link-1">BMW</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='Link' to='/category/Ford' eventkey="link-2">Ford</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='Link' to='/category/Audi' eventkey="link-3">Audi</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='Link' to='/category/Range Rover' eventkey="link-3">Range Rover</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/cart" eventkey="Link-4">
          <CartWidget/>
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;