import React, { useState } from 'react';

const users = [
  {
    name: 'Aman',
    age: 21,
  },
  {
    name: 'Holy',
    age: 77,
  },
  {
    name: 'Waltah White',
    age: 53,
  },
];

const UserSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(); // undefined is when user first init or not found

  const searchUser = () => {
    const foundUser = users.find((user) => user.name.includes(query));

    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchUser}>Search</button>

      {user && (
        <div>
          <p>Name: {user?.name}</p>
          <p>Age: {user?.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
