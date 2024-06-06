import React from 'react';

const SelesaiVolunteer = () => {
  const volunteerData = [
    { id: 'V003', judul: 'Volunteer C', lokasi: 'Surabaya', pendaftar: 45, sisaHari: 0 },
  ];

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
          </tr>
        </thead>
        <tbody>
          {volunteerData.map((volunteer, index) => (
            <tr key={index}>
              <td>{volunteer.id}</td>
              <td>{volunteer.judul}</td>
              <td>{volunteer.lokasi}</td>
              <td>{volunteer.pendaftar}</td>
              <td>{volunteer.sisaHari}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelesaiVolunteer;
