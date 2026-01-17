import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchLeadById } from "../services/api"; 

const LeadDetails = () => {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    const loadLead = async () => {
      const res = await fetchLeadById(id); 
      setLead(res.data);
    };

    loadLead();
  }, [id]);

  if (!lead) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Lead Details</h2>
      <p>Name: {lead.name}</p>
      <p>Email: {lead.email}</p>
      <p>Phone: {lead.phone}</p>
      <p>Status: {lead.status}</p>
      <p>Source: {lead.source}</p>
    </div>
  );
};

export default LeadDetails;
