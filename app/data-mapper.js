import client from "./database-client.js";

export async function getThreeCoffees() {
  const promise = await client.query('SELECT * FROM "coffee" ORDER BY "id" DESC LIMIT 3');
  const coffees = promise.rows;
  return coffees;
}

export async function getOneCoffeeById(coffeeId) {
  const promise = await client.query('SELECT * FROM "coffee" WHERE "id" = $1', [
    coffeeId
  ]);
  const coffeeById = promise.rows[0];
  return coffeeById;
}

export async function getAllCoffees() {
  const promise = await client.query('SELECT * FROM "coffee"');
  const allCoffee = promise.rows;
  return allCoffee;
}