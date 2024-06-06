import Navigationbar from "../components/Navigationbar";
import { Container } from "react-bootstrap";

const Donatur = () => {
  // Dummy data untuk tabel donatur
  const donaturData = [
    { waktu: '2024-05-30 14:30:45', id: '001', nama: 'John Doe', bank: 'BCA', jumlah: '100000' },
    { waktu: '2024-05-29 11:15:30', id: '002', nama: 'Jane Smith', bank: 'BNI', jumlah: '75000' },
    { waktu: '2024-05-28 09:45:15', id: '003', nama: 'Michael Johnson', bank: 'BRI', jumlah: '50000' },
    // Tambahkan data donatur lainnya di sini jika diperlukan
  ];

  return (
    <Container> 
    <div>
      <Navigationbar />
      <h2 className="text-center my-4">Daftar Donatur</h2>
      <table className="table table-striped mb-4 container mt-4">
        <thead className="bg-secondary text-white">
          <tr>
            <th>Waktu</th>
            <th>ID Donasi</th>
            <th>Nama Donatur</th>
            <th>Bank</th>
            <th>Jumlah Donasi</th>
          </tr>
        </thead>
        <tbody>
          {donaturData.map((donatur, index) => (
            <tr key={index}>
              <td>{donatur.waktu}</td>
              <td>{donatur.id}</td>
              <td>{donatur.nama}</td>
              <td>{donatur.bank}</td>
              <td>{donatur.jumlah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Container>
  );
};

export default Donatur;