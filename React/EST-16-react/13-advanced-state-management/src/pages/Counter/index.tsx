import Divider from "@/components/Divider";
import useCounter from "@/hook/useCounter";
import CountDisplay_ from "@/miniApp/Counter/CountDisplay_";
import Counter_ from "@/miniApp/Counter/index_";
import S from '@/miniApp/Counter/style.module.css';
import CounterReducer from "@/miniApp/CounterReducer";

function CounterPage() {

  const {count, increment, reset} = useCounter();

  return (
    <>
      <title>카운터</title>

      <section id="page">
        <div className="learn">
          <h1>카운터</h1>
          <p>같은 카운터를 커스텀 훅 · useReducer · Zustand로 만들어 비교합니다.</p>

          <Divider />

          <h2 lang="en" className="uppercase">Counter</h2>
          <p>간단한 카운터 앱의 상태를 CustomHook을 사용해 관리합니다.</p>

          <Counter_ />
          {/* <Counter_ /> */}

          {/* <div className="flex gap-2 items-center mt-4">
            <div className={S.component}><CountDisplay_ count={count} /></div>
            <div className={S.component}><CountDisplay_ count={count} /></div>
            <button type="button" onClick={increment} className="px-3 py-1 border border-accent rounded-xs">+1</button>
            <button type="button" onClick={reset} className="px-3 py-1 border border-accent rounded-xs">reset</button>
          </div> */}

          <Divider />
          
          <h2 lang="en" className="uppercase">Counter Reducer</h2>
          <p>카운터의 상태를 useReducer를 사용해 관리합니다.</p>
          <CounterReducer />

        </div>
      </section>
    </>
  );
}

export default CounterPage;