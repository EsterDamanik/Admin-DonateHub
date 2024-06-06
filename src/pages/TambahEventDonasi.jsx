import Navigationbar from "../components/Navigationbar";
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const TambahEventDonasi = () => {
    const [formData, setFormData] = useState({
        namaKegiatan: '',
        namaPenerima: '',
        alamatPenerima: '',
        deskripsiKisah: '',
        jumlahDonasi: '',
        tanggalAwal: '',
        tanggalAkhir: '',
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
            <h2 className="text-center my-4">Tambah Event Donasi</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="namaKegiatan" className="form-group">
                    <Form.Label className="form-label">Nama Kegiatan</Form.Label>
                    <Form.Control
                        type="text"
                        name="namaKegiatan"
                        value={formData.namaKegiatan}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </Form.Group>

                <Form.Group controlId="namaPenerima" className="form-group">
                    <Form.Label className="form-label">Nama Penerima Donasi</Form.Label>
                    <Form.Control
                        type="text"
                        name="namaPenerima"
                        value={formData.namaPenerima}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </Form.Group>

                <Form.Group controlId="alamatPenerima" className="form-group">
                    <Form.Label className="form-label">Alamat Penerima Donasi</Form.Label>
                    <Form.Control
                        type="text"
                        name="alamatPenerima"
                        value={formData.alamatPenerima}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </Form.Group>

                <Form.Group controlId="deskripsiKisah" className="form-group">
                    <Form.Label className="form-label">Deskripsi Kisah</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="deskripsiKisah"
                        value={formData.deskripsiKisah}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </Form.Group>

                <Form.Group controlId="jumlahDonasi" className="form-group">
                    <Form.Label className="form-label">Jumlah Donasi yang Dibutuhkan</Form.Label>
                    <Form.Control
                        type="number"
                        name="jumlahDonasi"
                        value={formData.jumlahDonasi}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </Form.Group>

                <Form.Group controlId="tanggalDonasi" className="form-group">
                    <Form.Label className="form-label">Periode Donasi</Form.Label>
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
                        className="form-control"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default TambahEventDonasi