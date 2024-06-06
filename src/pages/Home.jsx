import Navigationbar from "../components/Navigationbar";
import { Container, Row, Col, Card, Table } from 'react-bootstrap'; // Import komponen dari React Bootstrap
import { Pengajuan } from '../components/Pengajuan';

const Home = () => {
  return (
    <Container>
    <div>
      <Navigationbar />
        <Container className="mt-4">
          <Row className="mb-4">
            <Col>
              <h2>Dashboard</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Card className="bg-light">
                <Card.Body>
                  Donatur
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="bg-light">
                <Card.Body>
                  Donasi Terkumpul
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="bg-light">
                <Card.Body>
                  Event Donasi
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="bg-light">
                <Card.Body>
                  Event Volunteer
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h2>Permohonan Terbaru</h2>
              <Pengajuan /> 
            </Col>
          </Row>
        </Container>
    </div>
    </Container>
  );
};

export default Home;
