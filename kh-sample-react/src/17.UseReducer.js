import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCLREMENT":
      return { value: state.value + 1 };
    case "DECLREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const ReducerCnt = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCLREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECLREMENT" })}>감소</button>
    </>
  );
};
export default ReducerCnt;
