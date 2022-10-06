import React, { useState } from "react";
import styles from "./DarkThem.module.css";
function Calculator() {
  const [inputValue, setInputValue] = useState("Welcome!");
  const [joinString, setJoinString] = useState("");
  // Addition States
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [addition, setAddition] = useState(0);
  //Substration States
  const [substartion, setSubstartion] = useState(0);
  // Multiplication States
  const [multiplication, setMultiplication] = useState(0);
  //Division States
  const [division, setDivision] = useState(0);
  //Module States
  const [modules, setModule] = useState(0);

  function storeValue(e) {
    setInputValue(`${joinString}${e.target.innerText}`);
    setJoinString(`${joinString}${e.target.innerText}`);

    // All Clear Code
    if (e.target.innerText === "AC") {
      setInputValue("Cleared!");
      setJoinString("");
      setNum1(0);
      setNum2(0);
    }

    // Addition Code
    if (e.target.innerText === "+") {
      setNum1(+inputValue);
      setAddition(1);
      setInputValue("");
      setJoinString("");
    }
    if (e.target.innerText === "=" && addition !== 0) {
      setNum2(+inputValue);
      setInputValue("");
      setJoinString("");
      setAddition(3);
    }

    // Substation Code
    if (e.target.innerText === "-") {
      setNum1(+inputValue);
      setSubstartion(1);
      setInputValue("");
      setJoinString("");
    }
    if (e.target.innerText === "=" && substartion !== 0) {
      setNum2(+inputValue);
      setInputValue("");
      setJoinString("");
      setSubstartion(3);
    }

    // multiplication Code
    if (e.target.innerText === "x") {
      setNum1(+inputValue);
      setMultiplication(1);
      setInputValue("");
      setJoinString("");
    }
    if (e.target.innerText === "=" && multiplication !== 0) {
      setNum2(+inputValue);
      setInputValue("");
      setJoinString("");
      setMultiplication(3);
    }

    // division Code
    if (e.target.innerText === "/") {
      setNum1(+inputValue);
      setDivision(1);
      setInputValue("");
      setJoinString("");
    }
    if (e.target.innerText === "=" && division !== 0) {
      setNum2(+inputValue);
      setInputValue("");
      setJoinString("");
      setDivision(3);
    }

    // module Code
    if (e.target.innerText === "%") {
      setNum1(+inputValue);
      setModule(1);
      setInputValue("");
      setJoinString("");
    }
    if (e.target.innerText === "=" && modules !== 0) {
      setNum2(+inputValue);
      setInputValue("");
      setJoinString("");
      setModule(3);
    }

    //Remove Last Num
    if (e.target.innerText === "<=") {
      setJoinString(Math.floor(+inputValue / 10));
      setInputValue(Math.floor(+inputValue / 10));
    }

    // Equle To Error
    if (
      e.target.innerText === "=" &&
      modules === 0 &&
      division === 0 &&
      multiplication === 0 &&
      substartion === 0 &&
      addition === 0
    ) {
      setJoinString("");
      setInputValue("Error!");
    }

    // Oprational Error
    if (
      (e.target.innerText === "+" && inputValue === "") ||
      (e.target.innerText === "-" && inputValue === "") ||
      (e.target.innerText === "x" && inputValue === "") ||
      (e.target.innerText === "/" && inputValue === "") ||
      e.target.innerText === "%"
    ) {
      setJoinString("");
      setInputValue("No Number");
    }
  }

  if (addition === 3) {
    let sum = num1 + num2;
    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    console.log("Answer :: " + sum);
    setNum1(sum);
    setInputValue(sum);
    setJoinString("");
    setAddition(0);
  }

  if (substartion === 3) {
    let sub = num1 - num2;
    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    console.log("Answer :: " + sub);
    setNum1(sub);
    setInputValue(sub);
    setJoinString("");
    setSubstartion(0);
  }

  if (multiplication === 3) {
    let mul = num1 * num2;
    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    console.log("Answer :: " + mul);
    setNum1(mul);
    setInputValue(mul);
    setJoinString("");
    setMultiplication(0);
  }

  if (division === 3) {
    let div = num1 / num2;
    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    console.log("Answer :: " + div);
    setNum1(div);
    setInputValue(div);
    setJoinString("");
    setDivision(0);
  }

  if (modules === 3) {
    let mod = num1 / num2;
    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    console.log("Answer :: " + mod);
    setNum1(mod);
    setInputValue(mod);
    setJoinString("");
    setModule(0);
  }

  function updateValue() {}
  return (
    <div className={styles.calculatorDiv}>
      <input type="text" value={inputValue} onChange={updateValue} />
      <div className={styles.buttonDiv}>
        <div>
          <button onClick={storeValue}>AC</button>
          <button onClick={storeValue}>{"<="}</button>
          <button onClick={storeValue}>%</button>
          <button onClick={storeValue}>/</button>
        </div>
        <div>
          <button onClick={storeValue}>7</button>
          <button onClick={storeValue}>8</button>
          <button onClick={storeValue}>9</button>
          <button onClick={storeValue}>x</button>
        </div>
        <div>
          <button onClick={storeValue}>4</button>
          <button onClick={storeValue}>5</button>
          <button onClick={storeValue}>6</button>
          <button onClick={storeValue}>-</button>
        </div>
        <div>
          <button onClick={storeValue}>1</button>
          <button onClick={storeValue}>2</button>
          <button onClick={storeValue}>3</button>
          <button onClick={storeValue}>+</button>
        </div>
        <div>
          <button onClick={storeValue} className={styles.zeroButton}>
            0
          </button>
          <button onClick={storeValue}>.</button>
          <button onClick={storeValue} className={styles.answerButton}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
