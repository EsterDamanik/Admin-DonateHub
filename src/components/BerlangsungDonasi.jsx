import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidEdit, BiSolidTrash} from 'react-icons/bi';

const BerlangsungDonasi = () => {
  const [tableData, setTableData] = useState([
    { id: 'D001', judul: 'Donasi A', target: 1000000, terkumpul: 500000, sisaHari: 10 },
    { id: 'D002', judul: 'Donasi B', target: 2000000, terkumpul: 1000000, sisaHari: 5 },
    { id: 'D003', judul: 'Donasi C', target: 3000000, terkumpul: 1000000, sisaHari: 7 },
    { id: 'D004', judul: 'Donasi D', target: 4000000, terkumpul: 1000000, sisaHari: 13 },
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
            <th>Target</th>
            <th>Terkumpul</th>
            <th>Sisa Hari</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.judul}</td>
              <td>{data.target}</td>
              <td>{data.terkumpul}</td>
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

export default BerlangsungDonasi