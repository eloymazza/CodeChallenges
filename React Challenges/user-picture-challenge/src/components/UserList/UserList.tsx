import React from 'react';
import User from '../User/User';
import useUsers from '../../hooks/useUsers';

const UserList = () => {
  const { users, fetchUser, isLoading } = useUsers();
  const [currentUserIndex, setCurrentUserIndex] = React.useState(0);

  const currentUser = users[currentUserIndex];

  const handleNextUser = async () => {
    if (currentUserIndex === users.length - 1) {
      await fetchUser();
    }
    setCurrentUserIndex((prev) => prev + 1);
  };

  const handlePrevUser = () => {
    setCurrentUserIndex((prev) => prev - 1);
  };

  return (
    <div>
      {users.length === 0 ? (
        <button onClick={fetchUser}>Fetch User</button>
      ) : (
        <>
          <h3>Current User</h3>
          {isLoading ? (
            <div style={{ margin: 5 }}>Loading...</div>
          ) : (
            <User user={currentUser} />
          )}
          <button disabled={currentUserIndex === 0} onClick={handlePrevUser}>
            Prev User
          </button>
          <button onClick={handleNextUser}>Next User</button>
        </>
      )}
    </div>
  );
};

export default UserList;
