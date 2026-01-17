import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLeads, fetchAnalytics } from "../services/api";
import LeadTable from "../components/LeadTable";
import AnalyticsCards from "../components/AnalyticsCards";
import Pagination from "../components/Pagination";

const Leads = () => {
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const LIMIT = 10;

  // 🔐 Auth check
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]); // ✅ navigate added

  // Fetch leads
  useEffect(() => {
    const loadLeads = async () => {
      const res = await fetchLeads({
        search,
        status,
        page,
        limit: LIMIT,
      });
      setLeads(res.data.leads);
    };

    loadLeads();
  }, [search, status, page]);

  // Fetch analytics once
  useEffect(() => {
    const loadAnalytics = async () => {
      const res = await fetchAnalytics();
      setAnalytics(res.data);
    };

    loadAnalytics();
  }, []);

  const totalPages = analytics
    ? Math.ceil(analytics.totalLeads / LIMIT)
    : 0;

  return (
    <div className="container">
      <h2>Lead Dashboard</h2>

      <AnalyticsCards analytics={analytics} />

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
      </div>

      <LeadTable leads={leads} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Leads;
