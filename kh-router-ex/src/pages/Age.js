import { useParams, Link, useNavigate } from "react-router-dom";

const Age = () => {
  const { age } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>전달 받은 나이는 {age} 입니다.</h1>
      <Link to="/about">소개</Link>
      <p>
        <p style={{ textDecoration: "underline" }} onClick={() => navigate(1)}>
          소개페이지로 이동
        </p>
      </p>
    </>
  );
};
export default Age;
