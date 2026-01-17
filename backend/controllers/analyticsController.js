import Lead from "../models/Lead.js";

export const getLeadAnalytics = async (requestAnimationFrame, res) => {
  try {
    const totalLeads = await Lead.countDocuments();

    const convertedLeads = await Lead.countDocuments({
      status: "COnverted",
    });

    const leadsByStatus = await Lead.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      totalLeads,
      convertedLeads,
      leadsByStatus,
    });
  } catch (error) {
    res.status(500).json({ message: "Analytics error" });
  }
};
