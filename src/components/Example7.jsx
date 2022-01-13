import { useState } from "react"
import { useMemo } from "react";
import { useCallback } from "react";

function sum(persons) {
  console.log('sum...')
  return persons.map(persons => persons.age).reduce((l, r) => l + r , 0);
}

export default function Example7() {
  const [value, setValue] = useState('')
  const [persons] = useState([
    {name: 'Seyoung', age: 28},
    {name: 'Anna', age: 19},
  ]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);
  
  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value)
  }
}


// useCallBack, useRef, useMemo => 랜더 사이의 어떤 상태를 유지하는 기능