import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavBarMenu.css";

const NavBarMenu = ({items}) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{marginBottom: "1rem"}}>
        <Container>
          <Navbar.Brand href="#">Frameworki frontendowe</Navbar.Brand>
          <Nav className="me-auto">
          {items.map(item => (
            <Nav.Link key={item.id} href={`${item.url}`}>
              {item.label}
            </Nav.Link>
          ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMenu;
