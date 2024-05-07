// 리액트에서의 배열과 맵 : 렌더링에 매우 중요한 역할을 함

const User = (props) => {
  return (
    <>
      <b>{props.user.userName}</b>{" "}
      <span style={{ color: "red" }}>{props.user.email}</span>;
      <br />
    </>
  );
};

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gamil.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];
  return (
    <>{users && users.map((user) => <User key={user.id} user={user} />)}</>
  );
};
export default UserList;
