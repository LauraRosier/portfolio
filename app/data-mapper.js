import client from "./database-client.js";

export async function getThreeCoffee() {
  const promise = await client.query('SELECT * FROM "coffee" ORDER BY "id" DESC LIMIT 3');
  const coffees = promise.rows;
  return coffees;
}