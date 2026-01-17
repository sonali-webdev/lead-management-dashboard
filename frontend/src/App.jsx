import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Leads from "./pages/Leads";
import LeadDetails from "./pages/LeadDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads/:id" element={<LeadDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
