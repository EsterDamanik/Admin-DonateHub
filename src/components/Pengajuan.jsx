import React from 'react'
import { Link } from 'react-router-dom';

export const Pengajuan = () => {
    const tableData = [
        { tanggal: '2024-05-30', jenis: 'Donasi', judul: 'Update Sistem', status: 'Belum Dilihat' },
        { tanggal: '2024-05-29', jenis: 'Volunteer', judul: 'Webinar React', status: 'Belum Dilihat'},
        { tanggal: '2024-05-28', jenis: 'Donasi', judul: 'React 18 Rilis', status: 'Dilihat' },
        // Tambahkan data lainnya di sini jika diperlukan
      ];
      
  return (
    <div className="container mt-4">
      <table className="table table-striped table-bordered">
        <thead className="bg-secondary text-white">
          <tr>
            <th>Tanggal</th>
            <th>Jenis</th>
            <th>Judul</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.tanggal}</td>
              <td>{row.jenis}</td>
              <td>{row.judul}</td>
              <td>{row.status}</td>
              <td><Link to={`/detail/${row.id}`} className="btn btn-primary">Detail</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
