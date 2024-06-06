import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import DaftarEventDonasi from "./pages/DaftarEventDonasi";
import InboxPermohonan from "./pages/InboxPermohonan";
import DaftarEventVolunteer from "./pages/DaftarEventVolunteer";
import TambahEventDonasi from "./pages/TambahEventDonasi";
import TambahEventVolunteer from "./pages/TambahEventVolunteer";
import Donatur from "./pages/Donatur";
import './styles.css';


function App() {
  return (
  <div> 
    <Routes>
      <Route path= "/" Component={Login} />
      <Route path= "/Home" Component={Home} />
      <Route path= "/TambahEventDonasi" Component={TambahEventDonasi} />
      <Route path= "/TambahEventVolunteer" Component={TambahEventVolunteer} />
      <Route path= "/DaftarEventDonasi" Component={DaftarEventDonasi} />
      <Route path= "/DaftarEventVolunteer" Component={DaftarEventVolunteer} />
      <Route path= "/InboxPermohonan" Component={InboxPermohonan} />
      <Route path= "/Donatur" Component={Donatur} />
    </Routes>
  </div>
  ); 
}

export default App
