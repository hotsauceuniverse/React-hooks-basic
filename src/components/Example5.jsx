import React from 'react';


export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('componentDidMount');

    return () => {
      // cleanup
      // componentWillUnMount
    }
  }, []);

  React.useEffect(() => {
    console.log('componentDidMount & componentDidUpdate by count', count);

    return () => {
      // cleanup 
      console.log('cleanup by count', count)
    };
  }, [count]);

  // 2번째 인자로 React.DependencyList를 작성할 수 있다. => [] 배열로 들어간다.
  // 실행되는 타이밍을 조절할 때 쓴다.
  // 없을 때 : 항상 랜더된 직후에 무조건 함수를 실행
  // []빈배열 있을 때 : 최초에만 실행

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
      
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}