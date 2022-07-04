import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Find = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [data, setData] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  // useEffect(() => {
  //   const loadUsers = async () => {
  //     const response = await axios.get(
  //       `https://api.finanvo.in/search/company?query=${text}&limit=25`
  //     );
  //     console.log(response.data);
  //     setUsers(response.data.data);
  //   };
  // }, []);
  const loadUsers = async () => {
    const response = await axios.get(
      `https://api.finanvo.in/search/company?query=${text}&limit=5`
    );
    // console.log('response.data: ', response.data);
    // console.log('response.data.data: ', response.data.data);

    setUsers([...response.data.data]);
    // let result = users.map((data) => data.name);
    // console.log('result :', result);
    setSuggestions([...users]);
    console.log('suggestions :', suggestions);
  };
  const onChangeHandler = (text) => {
    setText(text);
    loadUsers();
  };
  const onSuggestHandler = (text) => {
    setData({ ...text });
    setText(text.name);
    ///setSuggestions([]);
    console.log('text :', text);
  };
  //postdata function
  async function postData(e) {
    e.preventDefault();

    axios
      .post(
        '/create',
        {
          // id: text.dataid,
          data,
          // name: text.name,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (res) {
        console.log('success :,', res.data.data.rows);
        if (res.data.status == 'ok') {
          navigate('/listCompany', {
            state: {
              TotalCompanyData: res.data.data.rows,
              // LoggedUserEmail: res.data.userEmail,
              // LoggedUserName: res.data.userName,
              // LoggedUserToken: res.data.token,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });

    setText('');
    setData({});
    setSuggestions([]);
  }

  //postdata ends
  return (
    <div className='container'>
      <form onSubmit={postData}>
        <input
          type='text'
          className='col-md-5'
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
          style={{ marginTop: 10 }}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 2500);
          }}
        />

        <input type='submit' />
      </form>
      {suggestions &&
        suggestions.map((data, i) => (
          <div
            key={i}
            className='suggestion col-md-12 justify-content-md-center'
            onClick={() => onSuggestHandler(data)}
          >
            {data.name}
          </div>
        ))}
    </div>
  );
};

export default Find;
