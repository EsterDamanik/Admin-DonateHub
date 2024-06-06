import { Navbar, Container, Button, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import { BiSolidHome, BiSolidAddToQueue, BiSolidSpreadsheet, BiSolidMessageDetail, BiSolidLogOut, BiSolidDollarCircle, BiMenu} from 'react-icons/bi'; {/*ada perubahan nambah icon*/}
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <Navbar className="bg-green">
        <Container>
          <Button variant="light" onClick={toggleLinks}><BiMenu/></Button>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas untuk daftar link */}
      <Offcanvas show={showLinks} onHide={toggleLinks}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="/images/logo-dh.png" alt="DonateHub Logo" className='logo-icon'/> 
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Daftar link */}
          <Nav className="flex-column">
          <Nav.Link as={Link} to="/Home"> <BiSolidHome /> Home</Nav.Link>
          <NavDropdown 
            title={
              <span>
                <BiSolidAddToQueue style={{ marginRight: '5px' }} /> {/*ada perubahan nambah icon*/}
                Tambah Event
              </span>
            } 
            id="basic-nav-dropdown"
          >
                <NavDropdown.Item as={Link} to="/TambahEventDonasi">Donasi</NavDropdown.Item> {/*ada perubahan */}
                <NavDropdown.Item as={Link} to="/TambahEventVolunteer">Volunteer</NavDropdown.Item> {/*ada perubahan */}
              </NavDropdown>
              <NavDropdown 
            title={
              <span>
                <BiSolidSpreadsheet style={{ marginRight: '5px' }} /> {/*ada perubahan nambah icon*/}
                Daftar Event
              </span>
            } 
            id="basic-nav-dropdown"
          >
                <NavDropdown.Item as={Link} to="/DaftarEventDonasi">Donasi</NavDropdown.Item> {/*ada perubahan */}
                <NavDropdown.Item as={Link} to="/DaftarEventVolunteer">Volunteer</NavDropdown.Item> {/*ada perubahan */}
              </NavDropdown>
            <Nav.Link as={Link} to="/InboxPermohonan"><BiSolidMessageDetail /> Inbox Permohonan</Nav.Link> {/*ada perubahan nambah icon*/}
            <Nav.Link as={Link} to="/Donatur"><BiSolidDollarCircle /> Donatur</Nav.Link> {/*ada perubahan nambah icon*/}
            <Nav.Link as={Link} to="/"><BiSolidLogOut /> Log Out</Nav.Link> {/*ada perubahan nambah icon*/}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigationbar;