
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faStore} /> Online Store
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/cart">Cart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              test
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
              products
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
