import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidEdit, BiSolidTrash} from 'react-icons/bi';

const BerlangsungVolunteer = () => {
  const [tableData, setTableData] = useState([
    { id: 'V001', judul: 'Volunteer A', lokasi: 'Jakarta', pendaftar: 50, sisaHari: 15 },
    { id: 'V002', judul: 'Volunteer B', lokasi: 'Bandung', pendaftar: 30, sisaHari: 8 },
    { id: 'V003', judul: 'Volunteer C', lokasi: 'Bogor', pendaftar: 30, sisaHari: 11 },
    { id: 'V004', judul: 'Volunteer D', lokasi: 'Bekasi', pendaftar: 30, sisaHari: 20 },
    // Tambahkan data lainnya di sini jika diperlukan
  ]);

      const handleDelete = (id) => {
        const updatedTableData = tableData.filter((data) => data.id !== id);
        setTableData(updatedTableData);
      };
    
      return (
        <div className="container mt-4">
          <table className="table table-striped table-bordered">
            <thead className="bg-secondary text-white">
              <tr>
                <th>ID</th>
                <th>Judul</th>
                <th>Lokasi</th>
                <th>Pendaftar</th>
                <th>Sisa Hari</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.judul}</td>
                  <td>{data.lokasi}</td>
                  <td>{data.pendaftar}</td>
                  <td>{data.sisaHari}</td>
                  <td>
                    <Link to={`/edit/${data.id}`} className="btn btn-warning"><BiSolidEdit/></Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(data.id)}><BiSolidTrash/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default BerlangsungVolunteer