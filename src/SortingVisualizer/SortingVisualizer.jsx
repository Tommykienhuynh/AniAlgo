import React, { useState, useEffect } from "react";
import ToolBar from "./toolBar/toolBar";
import Nav from "./nav/nav";
import Graph from "./graph/Graph";

function SortingVisualizer() {
  //let check = false;
  let [arr, setArr] = useState([
    3,
    4,
    2,
    34,
    41,
    12,
    87,
    5,
    23,
    11,
    23,
    14,
    86,
    64,
  ]);

  let animationArr = [];

  /*  useEffect(() => {
    console.log(arr);
  }, arr); */

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function generateNumbers() {
    let newArr = [];
    let temp = 0;

    while (temp <= 14) {
      newArr.push(getRandomArbitrary(1, 99));
      temp++;
    }
    setArr(newArr);
  }

  function changeArr() {
    //event.preventDefault();
    setArr([2, 4, 2, 3]);
  }

  function visual() {
    const arrayBars = document.getElementsByClassName("graphBar");
    for (let i = 0; i < animationArr.length; i++) {
      setTimeout(() => {
        let indArr = animationArr[i];
        const barOneIdx = indArr[0];
        const barTwoIdx = indArr[1];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        barOneStyle.backgroundColor = "var(--main-blue)";
        barTwoStyle.backgroundColor = "var(--main-blue)";

        setTimeout(() => {
          barOneStyle.backgroundColor = "var(--main-pink)";
          barTwoStyle.backgroundColor = "var(--main-pink)";
        }, 100);
      }, i * 200);
    }
  }

  async function animateBubble() {
    const arrayBars = document.getElementsByClassName("graphBar");
    for (let i = 0; i < animationArr.length; i++) {
      await new Promise((r) => setTimeout(r, 2000));

      let indArr = animationArr[i];
      const barOneIdx = indArr[0];
      const barTwoIdx = indArr[1];
      const swapArr = indArr[2];

      //let newArr = [];

      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      barOneStyle.backgroundColor = "var(--main-blue)";
      barTwoStyle.backgroundColor = "var(--main-blue)";
      await new Promise((r) => setTimeout(r, 1000));
      setArr(swapArr[0]);

      barOneStyle.backgroundColor = "var(--main-pink)";
      barTwoStyle.backgroundColor = "var(--main-pink)";
    }

    // const newArry = arr.slice(0, arr.length);
    //setArr(newArry);
    /*   setTimeout(() => {
     
    }, 5000); */
  }

  function bubblesort() {
    let noswaps;
    let newArr = arr;
    let len = newArr.length;

    for (let i = 0; i < len; i++) {
      noswaps = true;

      for (let j = 0; j < len; j++) {
        // console.log(newArr, newArr[j], newArr[j + 1]);
        //Highlight bars so to indicate comparison
        /* const arrayBars = document.getElementsByClassName("graphBar");

        const barOneStyle = arrayBars[j].style;
        const barTwoStyle = arrayBars[j + 1].style;

        barOneStyle.backgroundColor = "var(--main-blue)";
        barTwoStyle.backgroundColor = "var(--main-blue)";
 */

        if (arr[j] > arr[j + 1]) {
          const arrCopy = [...arr];
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noswaps = false;

          console.log(arr);
          animationArr.push([j, j + 1]);
          visual();
          setTimeout(() => {
            setArr(arrCopy);
          }, 300 * i * j);
        }
      }

      // animationArr.push([j, j + 1]);

      console.log("ONE PASS COMPLETE", noswaps);
      //turn of highlighted bars

      if (noswaps) break;
      /* setArr(() => {
          return newArry;
        }); */
    }

    //animateBubble();
    // visual();
  }
  //bubblesort();

  return (
    <div className="appContainer">
      <Nav />
      <ToolBar
        arr={arr}
        changeArr={changeArr}
        generateNumbers={generateNumbers}
        bubbleSort={bubblesort}
        /*   setArr={setArr} */
      />
      <Graph arr={arr} generateNumbers={generateNumbers} />
    </div>
  );
}

export default SortingVisualizer;
