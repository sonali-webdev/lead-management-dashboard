import Lead from "../models/Lead.js";

export const getLeads = async (req, res) => {
  const { search, status, page = 1, limit = 10 } = req.query;

  let query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (status) {
    query.status = status;
  }

  const leads = await Lead.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Lead.countDocuments(query);
  res.json({ total, leads });
};

export const getLeadById = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  res.json(lead);
};
