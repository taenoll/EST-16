import { useMemo, useState } from "react"
import Child from "./Child";



// useMemo는 계산 결과를 메모이제이션(캐싱)하여 불필요한 재계산을 방지하는 React 대표적인 Hook입니다.
// 의존성 배열의 값이 변경될 때만 계산을 수행합니다. 의존성 배열이 변경되지 않으면 이전 결과를 재사용합니다.
// 주로 복잡한 연산, 대량 데이터 필터링/정렬 등 성능 최적화가 필요한 상황에서 주로 사용됩니다.

// React.memo    => 컴포넌트 리렌더링 최적화
// useCallback   => 함수를 기억할 때
// useMemo       => 배열/객체/계산값을 기억할 때

// 자식에게 전달할 데이터가 고정되어 있다면 컴포넌트 안에서 매번 만들 필요가 없습니다.
// 컴포넌트 밖에 선언하면 렌더링마다 다시 생성되지 않습니다.

// 저어어어ㅓㅓㅓㅓㅓㅓㅓㅓ얼대 안 바뀌는 값이다? 그럼 사실 컴포넌트 안에 넣는 게 의미가 없음

function Parent() {

  const [count, setCount] = useState(0);

  const STUDENTS = useMemo(()=>[
    "🐷심선범",
    "🐭이소망",
    "🐰이유정",
    "🦁신재훈",
    "🐨안경찬",
    "🐧박소연",
    "🪾조민지",
    "🐗김효경",
  ],[]);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button type="button" onClick={()=> setCount(count + 1)}> +1 </button>
      <Child item={STUDENTS} />;
    </div>
  )
}
export default Parent