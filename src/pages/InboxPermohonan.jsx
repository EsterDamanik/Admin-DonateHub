import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navigationbar from '../components/Navigationbar';
import { Pengajuan } from '../components/Pengajuan';
import { Disetujui } from '../components/Disetujui';
import { Ditolak } from '../components/Ditolak';
import { Container } from 'react-bootstrap';

export const InboxPermohonan = () => {
  return (
    <div>
      <Container> 
      <Navigationbar />
      <h2 className="text-center my-4">Inbox Permohonan</h2>
      <div className="container mt-4">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Pengajuan">
            <Pengajuan />
          </Tab>
          <Tab eventKey="profile" title="Disetujui">
            <Disetujui />
          </Tab>
          <Tab eventKey="contact" title="Ditolak" >
            <Ditolak />
          </Tab>
        </Tabs>
      </div>
      </Container>
    </div>
  );
};

export default InboxPermohonan;
