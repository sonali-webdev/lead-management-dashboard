import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Lead from "../models/Lead.js";
import dotenv from "dotenv";

dotenv.config();

const seedLeads = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Lead.deleteMany();

    const leads = Array.from({ length: 500 }).map(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      status: faker.helpers.arrayElement(["New", "Contacted", "Converted"]),
      source: faker.company.name(),
    }));

    await Lead.insertMany(leads);

    console.log("✅ 500 leads seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedLeads();
