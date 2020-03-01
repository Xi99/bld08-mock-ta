const { Pool } = require("pg");
const pool = new Pool({
  database: "cows"
});
// use query's here

const getAllCows = () => {
  // let values = [cows];
  return pool.query("SELECT * FROM cow").then(res => res.rows);
};

const addCow = cow => {
  let values = [cow.name, cow.description];
  return pool
    .query("INSERT INTO cow (cow_name, cow_description) VALUES($1, $2)", values)
    .then(() => true);
};

module.exports = {
  getAllCows,
  addCow
};
