import fs from 'node:fs';
import Database from 'better-sqlite3';

// 1. Load your large JSON file
const rawData = JSON.parse(fs.readFileSync('./20260911_world_data.json', 'utf8'));

// 2. Create a new SQLite database directly in your React public folder
const db = new Database('./public/countries_sql_db.sqlite');

// 3. Create a table optimized for fast lookups
db.exec(`
  DROP TABLE IF EXISTS countries;
  CREATE TABLE countries (
    alpha2 TEXT PRIMARY KEY,
    name TEXT,
    json_data TEXT
  );
`);

// 4. Prepare the insertion statement
const insert = db.prepare(
  'INSERT INTO countries (alpha2, name, json_data) VALUES (@alpha2, @name, @json_data)'
);

// 5. Insert all countries inside a transaction for maximum speed
db.transaction(() => {
  for (const country of rawData.data.countries) {
    insert.run({
      alpha2: country.codes.alpha_2, // e.g., "AU"
      name: country.names.common,    // e.g., "Australia"
      json_data: JSON.stringify(country) // The full nested object
    });
  }
})();

console.log('Static SQLite database built successfully in /public/countries.sqlite');