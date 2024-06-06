import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navigationbar from '../components/Navigationbar';
import BerlangsungDonasi from '../components/BerlangsungDonasi';
import SelesaiDonasi from '../components/SelesaiDonasi';
import { Container } from 'react-bootstrap';

const DaftarEventDonasi = () => {
  return (
    <div>
      <Container>
        <Navigationbar />
        <h2 className="text-center my-4">Daftar Event Donasi</h2>
        <div className="container mt-4">
          <Tabs defaultActiveKey="berlangsung" id="event-donasi-tab" className="mb-3">
            <Tab eventKey="berlangsung" title="Berlangsung">
              <BerlangsungDonasi />
            </Tab>
            <Tab eventKey="selesai" title="Selesai">
              <SelesaiDonasi />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default DaftarEventDonasi;
