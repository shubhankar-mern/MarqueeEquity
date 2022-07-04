import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const ListCompany = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const token = location.state.TotalCompanyData;
  console.log('token :-', token);
  return (
    <div>
      <br />
      <br />
      <hr />
      <Link to='/'>
        <button className='button_company'>COMPANY +</button>
      </Link>

      <p className='heading'>List Of Companies</p>
      <hr />
      <table className='container'>
        <thead>
          <tr>
            <th scope='col'>
              <i class='fas fa-sort-up'></i>
              CIN
              <i class='fas fa-sort-down'></i>
            </th>
            <th scope='col'>
              <i class='fas fa-sort-up'></i>
              NAME
              <i class='fas fa-sort-down'></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {token.map((data) => (
            <tr>
              <th>{data.cin_id}</th> <th>{data.company_name}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCompany;
