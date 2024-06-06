import React, { useState } from 'react';

export const Ditolak = () => {
  // Menggunakan state untuk menyimpan data tabel
  const [tableData, setTableData] = useState([
    { id: 1, tanggal: '2024-05-30', jenis: 'Donasi', judul: 'Judul 1' },
    { id: 2, tanggal: '2024-05-29', jenis: 'Volunteer', judul: 'Judul 2' },
    { id: 3, tanggal: '2024-05-28', jenis: 'Volunteer', judul: 'Judul 3' },
    // Tambahkan data lainnya di sini jika diperlukan
  ]);

  // Fungsi untuk menghapus baris dari tabel
  const handleDelete = (id) => {
    const updatedTableData = tableData.filter((data) => data.id !== id);
    setTableData(updatedTableData);
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead className="bg-secondary text-white">
          <tr>
            <th>Tanggal</th>
            <th>Jenis</th>
            <th>Judul</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>{data.tanggal}</td>
              <td>{data.jenis}</td>
              <td>{data.judul}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ditolak;
