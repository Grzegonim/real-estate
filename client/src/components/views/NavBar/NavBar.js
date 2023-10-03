import { Container, Nav, Navbar } from "react-bootstrap";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar expand="md" className={ styles.navbarContainer}>
        <Navbar.Brand>
          <img src={process.env.PUBLIC_URL + '/logo_company.svg'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link>Nieruchomości na wynajem</Nav.Link>
          <Nav.Link>Nieruchomości na sprzedaż</Nav.Link>
          <Nav.Link>O nas</Nav.Link>
          <Nav.Link>Kontakt</Nav.Link>
        </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default NavBar;