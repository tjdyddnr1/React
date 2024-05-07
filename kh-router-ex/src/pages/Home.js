import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보이는 페이지 입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <p>
        <Link to="/profiles/frontend">Frontend 프로필 보기</Link>
      </p>
      <p>
        <Link to="/Age">나이 전달하기</Link>
      </p>
      <p>
        <Link to="/profiles/backend">backend 프로필 보기</Link>
      </p>
      <p>
        <Link to="/profiles/dba">dba 프로필 보기</Link>
      </p>
      <p>
        <Link to="/articles">게시판 목록</Link>
      </p>
    </>
  );
};
export default Home;
