import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); // নিশ্চিতভাবে load করবে

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("❌ MONGODB_URI is not defined!");

const client = new MongoClient(uri);

async function seed() {
  try {
    await client.connect();
    const db = client.db("jobtask"); // Atlas DB name
    const products = db.collection("products");

    await products.deleteMany({});
    await products.insertMany([
      { name: "Laptop", price: 1200 },
      { name: "Phone", price: 800 },
      { name: "Headphones", price: 150 },
    ]);

    console.log("✅ Products seeded successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

seed();
