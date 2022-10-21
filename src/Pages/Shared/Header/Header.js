import React, { useContext } from 'react';
import { Button, Image, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
  const {user,logOut} = useContext(AuthContext) 
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="info" variant="info">
            <Container>
              <Navbar.Brand><Link className='fs-3 text-decoration-none fw-bold text-success' to='/'>News-365</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link to='/news'><Button className='me-3' variant="dark">All News</Button></Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Categories" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                {
                  user?.uid?
                  <>
                  <Nav.Link eventKey={2} href="#memes">
                    {
                      user.photoURL ?
                      <Image style={{height:'30px'}} roundedCircle src={user.photoURL}></Image>
                      :
                      <FaUserAlt></FaUserAlt>
                    }
                  </Nav.Link>
                  <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                  <Button onClick={handleLogOut} className='my-1' variant="danger">Log Out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'><Button className='me-3' variant="warning">Login</Button></Link>
                    <Link to='/register'><Button variant="success">Register</Button></Link>
                  </>
                }
                </Nav>
                <div className='d-lg-none'>
                    <LeftSideNav></LeftSideNav>
                </div>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;