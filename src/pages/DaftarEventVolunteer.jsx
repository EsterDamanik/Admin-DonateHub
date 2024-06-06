import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navigationbar from '../components/Navigationbar';
import BerlangsungVolunteer from '../components/BerlangsungVolunteer';
import SelesaiVolunteer from '../components/SelesaiVolunteer';
import { Container } from 'react-bootstrap';

const DaftarEventVolunteer = () => {
  return (
    <div>
      <Container>
        <Navigationbar />
        <h2 className="text-center my-4">Daftar Event Volunteer</h2>
        <div className="container mt-4">
          <Tabs defaultActiveKey="berlangsung" id="event-volunteer-tab" className="mb-3">
            <Tab eventKey="berlangsung" title="Berlangsung">
              <BerlangsungVolunteer />
            </Tab>
            <Tab eventKey="selesai" title="Selesai">
              <SelesaiVolunteer />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default DaftarEventVolunteer;
