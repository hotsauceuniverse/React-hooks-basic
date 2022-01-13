import React from 'react';

// useState => count
// useState => {count: 0};
export default function Example3() {
  const [state, setState] = React.useState({count: 0});


  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
      
    </div>
  );

  function click() {
    setState((state) => {
      return {
        count: state.count + 1
      };
    });
  }
}


// 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
// 복잡한 컴포넌트들은 이해하기 어렵다.
// class는 사람과 기계를 혼동시킨다. => 컴파일 단계에서 코드를 최적화 하기 어렵게 만든다.
// this.state는 로직에서 래퍼런스를 공유하기 때문에 문제가 발생할 수 있다.