import "dotenv/config";

import pg from "pg";

const client = new pg.Client({  host: process.env.DB_HOST,  // Cette variable doit correspondre à l'hôte correct
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

await client.connect();

export default client;