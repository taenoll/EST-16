import { useState } from "react"

// 스냅샷 이론
// 리액트의 스냅갹은 사진을 찍는 것과 같다
// 렌더링 순간에 State가 변경될 때 그 지점을 사진으로 찰칵 찍는 행위입니다.
// 사진을 찍고 나서 실제 값이 변경되더라도 이미 찍힌 사진 속 값은 바뀌지 않는다.
// State를 변경하면 기존 스냅샷을 수정하는 게 아니라, 다음 렌더링에서 새로운 스냅샷을 만들어냅니다.

// 이러한 개념을 공식문서에서는 State as a Snapshot이라 한다.

function Counter() {

  const [number,setNumber] = useState(0);


  const handleClick = () => {
    setNumber(number + 5);
  }


  return (
    <>
      <button type="button">감소</button>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}>증가</button>
    </>
  )
}
export default Counter