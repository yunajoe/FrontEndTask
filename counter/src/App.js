/*
버튼을 누를 때마다 +1 씩 증가 
버튼을 누를 떄마다 -1 씩 감소  (0 미만으로 안 떨어짐)
버튼을 누르면은 1초씩 자동증가 
버튼을 누르면은 1초씩 자동감소 (0 미만으로 안 떨어짐)
리셋버튼(0으로 초기화) 
스탑버튼(>> 자동증가 , 자동감소 일때만 적용이 되는거! )
*/

import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0)
  // setInterval의 ID가 될 state값 
  const [timeId, setTimeId] = useState('')
  const [play, setPlay] = useState(false)

  // number가 1씩 증가
  const increaseFunc = () => {
    setNumber(number+1)      
  }

  // number가 1씩 감소 
  const decreaseFunc = () => {
    if(number >0) setNumber(number-1)
  }

  // 1초씩 자동증가  >> setInterval 사용 
  // 진행중일 때 누르면 +1 이 안됨 
  const autoincrease = () => {
    setPlay(true)
    if(play === false ){
      const interval = setInterval(()=>{
        setNumber((prev) =>prev+1)
      }, 1000)
      setTimeId(interval)    
    }    
  }   


  // 1초씩 자동감소 >> setInterval 사용 
  // 진행중일 때 누르면 -1 이 안됨 
  const autodecrease = () => {
    if(number > 0){
      const interval = setInterval(()=>{
        setNumber((prev) => prev-1)
      }, 1000)
      setTimeId(interval)
    }   
  }

  // 스탑버튼 >> setInterval의 intervalID(여기서는, interval 변수)를 clearout한다 
  // clearInterval 사용하기 
  const stopfunc = () => {
    clearInterval(timeId)
  }

  const resetfunc = () =>{
      setNumber(0)
  }  
  return (
    <div>
      {number}  <br/>
      <button onClick={increaseFunc}>증가버튼</button>
      <button onClick={decreaseFunc}>감소버튼</button>
      <button onClick={autoincrease}>자동증가버튼</button> 
      <button onClick={autodecrease}>자동감소버튼</button>
      <button onClick={stopfunc}>스탑버튼</button>  
      <button onClick={resetfunc}>리셋버튼</button>  
    </div>
  );
}

export default App;
