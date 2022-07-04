const {
  CreateAndInsertCompany,
  SendCompanyDetails,
} = require('../models/index');

module.exports.create = async function (req, res) {
  console.log('req.body :', req.body);
  const company_cin = req.body.data.dataid;
  const company_name = req.body.data.name;
  try {
    const createdData = await CreateAndInsertCompany(company_cin, company_name);
    const allData = await SendCompanyDetails();
    return res.status(200).json({
      status: 'ok',
      data: allData,
    });
  } catch (error) {
    console.log('error :', error);
  }
};

module.exports.getCompany = async function (req, res) {
  try {
    const allData = await SendCompanyDetails();
    return res.status(200).json({
      status: 'ok',
      data: allData,
    });
  } catch (error) {
    console.log('error :', error);
  }
};
