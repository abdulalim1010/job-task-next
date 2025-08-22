import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("jobtask");
    const products = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
}

// POST - Add product
export async function POST(req) {
  try {
    const data = await req.json(); // form data
    const client = await clientPromise;
    const db = client.db("jobtask");
    const result = await db.collection("products").insertOne(data);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
  }
}
