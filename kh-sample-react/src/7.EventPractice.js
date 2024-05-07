import { useState } from "react";

const EventPractic = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    setUserName("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input type="text" value={userName} onChange={onChangeUserName} />
      <input
        type="text"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
      {/* <input
        type="text"
        placeholder="아무거나 입력"
        onChange={(e) => setMessage(e.target.value)}
        vlaue={message}
      /> */}
      {/* <h2>입력 받은 메시지 : {message}</h2> */}
    </>
  );
};
export default EventPractic;
