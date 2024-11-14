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

export async function getCoffeesByCharacteristic(coffeeCharact) {
  const promise = await client.query('SELECT * FROM "coffee" WHERE "characteristic" = $1', [
    coffeeCharact
  ]);
  const coffeeByCharact = promise.rows;
  return coffeeByCharact;
}

export async function createCoffee(coffeeData) {
  const promise = await client.query(`
    INSERT INTO "coffee" (
      "name",
      "description", 
      "reference", 
      "origin", 
      "price", 
      "characteristic", 
      "picture", 
      "available"
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8
    )
    RETURNING *
  `, [
    coffeeData.name,
    coffeeData.description,
    coffeeData.reference,
    coffeeData.origin,
    coffeeData.price,
    coffeeData.characteristic,
    coffeeData.picture,
    coffeeData.available === 'TRUE' 
  ]);

  return promise.rows[0];
}
