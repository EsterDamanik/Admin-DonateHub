import { Link } from 'react-router-dom';

export const Disetujui = () => {
    const tableData = [
        { jenis: 'Donasi', id: '001', judul: 'Permohonan 1', status: '-'},
        { jenis: 'Donasi', id: '002', judul: 'Laporan 1', status: '-'},
        { jenis: 'Volunteer', id: '003', judul: 'Permohonan 2', status: 'Diupload'},
        // Tambahkan data lainnya di sini jika diperlukan
      ];
    
      return (
        <div className="container mt-4">
          <table className="table table-striped table-bordered mb-4" style={{ backgroundColor: '#f2f2f2' }}>
            <thead className="bg-secondary text-white">
              <tr>
                <th>Jenis</th>
                <th>ID</th>
                <th>Judul</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.jenis}</td>
                  <td>{row.id}</td>
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
