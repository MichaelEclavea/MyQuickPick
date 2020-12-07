import React, { useState } from 'react'
import './styles/Keno.scss';

function Keno() {
  let tempArray = [];
  let array = [];
  const [answerArray, setAnswerArray] = useState([]);
  const [answer, setAnswer] = useState({
    num0: null,
    num3: null,
    num2: null,
    num4: null,
    num5: null,
    num6: null,
    num1: null,
    num7: null,
    num8: null,
    num9: null,
    num10: null,
    num11: null,
    num12: null,
    num13: null,
    num14: null,
    num15: null,
    num16: null,
    num17: null,
    num18: null,
    num19: null
  });
  const initialAnswer = answer;


    for(let i = 0; i < 20; i++){
      let num = `num${i}`;
      array.push(<input onChange={handleSubmit} key={i} name={num} type="number"/>)
    }


  function handleSubmit(event){
    event.preventDefault();
    const {name, value} = event.target;
    setAnswer(prevValue =>{
      for (let i = 0; i < 20; i++){
       setAnswer({
         ...prevValue,
         [name] : value
        })
      }
    })
  }

  function renderAnswers(){
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
    let temp = 0;
      for(const prop in answer){
        if(answer[prop] === null){
          let x = Math.floor(Math.random() * (array.length - 1) + 1); 
          x = array[x]; 
          tempArray.push(x);
          array.splice(x, 1);
          tempArray.sort((a, b) => a - b);
        }
        else{
          let num = parseInt(answer[prop]);
            let a = num - 2;
            let b = num + 4;
            let j = Math.floor(Math.random() * (b - a) + a);
            j = j - temp;
            if(j <= 0){
              //  j = Math.floor(Math.random() * (4 - 1) + 1);  ------ This is incase to randomize the value closer to the first index of the array -------
              j = 1;
            }
            let x = array[j];
            if(x === undefined){
              let lastNum = array.length - temp;
              x = array[lastNum];
            }
            temp++;
            tempArray.push(x);
            array.splice(j, 1);
            tempArray.sort((a, b) => a - b);
          }
        }
        setAnswerArray(tempArray);
        tempArray = [];
      }

      function renderReset(){
        setAnswerArray([]);
        setAnswer(initialAnswer);

    }


  return (

    <div id="keno">
      <section className="all-sections">
      <h2 id="keno-title">KENO</h2>
      <form id="keno-form">
      {array}
      </form>
      <br></br>
      <button type="submit" name="reset" onClick={renderReset}>Reset</button>
      <button type="submit" onClick={renderAnswers}>Click</button>
      </section>
      <div id="kenoRows">
      <ol>
        {answerArray.map((each, index) => <li key={index} className="answer-list">{each}</li>)}
       </ol>
       </div>
    </div>
  )
}




export default Keno;
