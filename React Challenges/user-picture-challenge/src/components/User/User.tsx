import { User as TUser } from '../../types/types';

type Props = {
  user: TUser;
};

const User: React.FC<Props> = ({ user }) => {
  if (!user) return <div>No users to display</div>;

  return (
    <div style={{ margin: 5 }}>
      <div style={{ margin: 5 }}>{user.name}</div>
      <img src={user.pictureURL} alt='User Picture' />
    </div>
  );
};
export default User;
