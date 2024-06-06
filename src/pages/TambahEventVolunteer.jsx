import Navigationbar from "../components/Navigationbar";
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const TambahEventVolunteer = () => {
    const [formData, setFormData] = useState({
        namaKegiatan: '',
        namaInstansi: '',
        alamatInstansi: '',
        deskripsiKegiatan: '',
        tanggalPendaftaranAwal: '',
        tanggalPendaftaranAkhir: '',
        tanggalPelaksanaanAwal: '',
        tanggalPelaksanaanAkhir: '',
        filePendukung: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'filePendukung') {
            setFormData({ ...formData, filePendukung: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proses form submission sesuai kebutuhan Anda
        console.log(formData);
    };

    return (
        <Container>
            <Navigationbar />
            <h2 className="text-center my-4">Tambah Event Volunteer</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="namaKegiatan" className="form-group">
                    <Form.Label className="form-label">Nama Kegiatan</Form.Label>
                    <Form.Control
                        type="text"
                        name="namaKegiatan"
                        value={formData.namaKegiatan}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="namaInstansi" className="form-group">
                    <Form.Label className="form-label">Nama Instansi Terkait</Form.Label>
                    <Form.Control
                        type="text"
                        name="namaInstansi"
                        value={formData.namaInstansi}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="alamatInstansi" className="form-group">
                    <Form.Label className="form-label">Alamat Instansi</Form.Label>
                    <Form.Control
                        type="text"
                        name="alamatInstansi"
                        value={formData.alamatInstansi}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="deskripsiKegiatan" className="form-group">
                    <Form.Label className="form-label">Deskripsi Kegiatan</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="deskripsiKegiatan"
                        value={formData.deskripsiKegiatan}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="tanggalDonasi" className="form-group">
                    <Form.Label className="form-label">Periode Pendaftaran</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                type="date"
                                name="tanggalAwal"
                                value={formData.tanggalAwal}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <span>sampai dengan</span>
                        </Col>
                        <Col>
                            <Form.Control
                                type="date"
                                name="tanggalAkhir"
                                value={formData.tanggalAkhir}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="tanggalDonasi" className="form-group">
                    <Form.Label className="form-label">Periode Pelaksanaan</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                type="date"
                                name="tanggalAwal"
                                value={formData.tanggalAwal}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <span>sampai dengan</span>
                        </Col>
                        <Col>
                            <Form.Control
                                type="date"
                                name="tanggalAkhir"
                                value={formData.tanggalAkhir}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="filePendukung" className="form-group">
                    <Form.Label className="form-label">File Pendukung</Form.Label>
                    <Form.Control
                        type="file"
                        name="filePendukung"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default TambahEventVolunteer