import React from 'react';
import { useHistory } from 'react-router-dom';

const LogOut = ({ show, handleClose }) => {
  const history = useHistory();

  // Fungsi untuk melakukan logout
  const handleLogout = () => {
    // Lakukan proses logout di sini jika diperlukan
    // Contoh: Hapus token, hapus sesi pengguna, dll.
    // Kemudian, arahkan kembali ke halaman login
    history.push('/');
  };

  // Secara otomatis lakukan logout ketika halaman dimuat
  React.useEffect(() => {
    handleLogout();
  }, []); // Perhatikan array dependencies kosong untuk menjalankan efek sekali saat halaman dimuat

  return null; // Halaman logout ini tidak perlu memiliki konten yang ditampilkan, jadi kita kembalikan null
};

export default LogOut;
