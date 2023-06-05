import { User as TUser } from '../../types/types';

type Props = {
  user: TUser;
};

const User: React.FC<Props> = ({ user }) => {
  if (!user) return <div>No users to display</div>;

  return (
    <div>
      <div>Name: {user.name}</div>
      <img src={user.pictureURL} alt='User Picture' />
    </div>
  );
};
export default User;
