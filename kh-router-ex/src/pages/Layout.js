import { Outlet } from "react-router-dom";
// 중첩된 라우트와 Outlet은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을 때 유용하게 사용

const Layout = () => {
  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
        {/* 중첩 라우터 대체 자리 */}
      </main>
      <footer style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Footer
      </footer>
    </>
  );
};

export default Layout;
