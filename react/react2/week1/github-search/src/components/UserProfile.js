export const UserProfile = (props) => {
  return (
    <li>
      <h4>{props.user.login}</h4>
      <img src={props.user.avatar_url} alt="user's avatar" />
    </li>
  );
};
