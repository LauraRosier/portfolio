import "dotenv/config";

import pg from "pg";

const client = new pg.Client({host: process.env.DB_HOST,      // Vérifiez que c'est bien la variable DB_HOST
    port: process.env.DB_PORT,      // Vérifiez que c'est bien la variable DB_PORT
    user: process.env.DB_USER,      // Vérifiez que c'est bien la variable DB_USER
    password: process.env.DB_PASSWORD, // Vérifiez que c'est bien la variable DB_PASSWORD
    database: process.env.DB_NAME,  // Vérifiez que c'est bien la variable DB_NAME
  });

await client.connect();

export default client;