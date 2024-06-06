import React from 'react';

const SelesaiDonasi = () => {
  const donationData = [
    { id: 'D003', judul: 'Donasi C', target: 1500000, terkumpul: 1500000, sisaHari: 0 },
  ];

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
          </tr>
        </thead>
        <tbody>
          {donationData.map((donation, index) => (
            <tr key={index}>
              <td>{donation.id}</td>
              <td>{donation.judul}</td>
              <td>{donation.target}</td>
              <td>{donation.terkumpul}</td>
              <td>{donation.sisaHari}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelesaiDonasi;
