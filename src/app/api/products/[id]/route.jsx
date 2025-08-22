import clientPromise from "../../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("jobtask");
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });
  if (!product) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  return new Response(JSON.stringify(product), { status: 200 });
}
