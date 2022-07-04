const { Pool } = require('pg');
const credentials = require('../config/index');

async function CreateAndInsertCompany(cin, name) {
  const pool = new Pool(credentials);
  const newCompany = await pool.query(
    'INSERT INTO todo (cin_id , company_name) VALUES ($1,$2) RETURNING *',
    [cin, name]
  );
  console.log(newCompany);
  await pool.end();

  return;
}

async function SendCompanyDetails() {
  const pool = new Pool(credentials);
  const AllCompanyDetails = await pool.query('SELECT * FROM todo');
  console.log(AllCompanyDetails);
  await pool.end();

  return AllCompanyDetails;
}
module.exports = {
  CreateAndInsertCompany,
  SendCompanyDetails,
};
