import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!props.data) {
      setUsername("ADMIN");
    } else {
      setUsername(props.data.firstName);
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between p-4 sm:p-6 lg:p-8">
      <h1 className="text-lg sm:text-2xl">
        Hello
        <br />
        <span className="text-xl sm:text-3xl font-semibold">{username}</span>
      </h1>
      <button 
        onClick={logOutUser} 
        className="mt-4 sm:mt-0 bg-red-500 text-base sm:text-lg font-medium text-white px-4 sm:px-5 py-2 rounded"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
