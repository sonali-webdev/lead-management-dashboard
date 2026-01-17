const AnalyticsCards = ({ analytics }) => {
  if (!analytics) return null;

  return (
    <div className="cards">
      <div className="card">
        <h4>Total Leads</h4>
        <p>{analytics.totalLeads}</p>
      </div>

      <div className="card">
        <h4>Converted Leads</h4>
        <p>{analytics.convertedLeads}</p>
      </div>

      <div className="card">
        <h4>Leads by Status</h4>
        {analytics.leadsByStatus.map((item) => (
          <p key={item._id}>
            {item._id}: {item.count}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCards;
