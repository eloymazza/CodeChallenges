import useUser from '../../hooks/useUser';

const User = () => {
  const user = useUser();
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <div>Name: {user.name}</div>
      <img src={user.pictureURL} alt='User Picture' />
    </div>
  );
};
export default User;
