/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Javi!");

  // 1. create the "parts of the sentence arrays"
  let who = ["The dog", "My grandma", "The mailman", "The bird"];
  let action = ["ate", "threw away", "mailed", "stole"];
  let what = ["my homework", "my cellphone", "the car"];
  let when = ["yesterday!", "this morning!", "last week!"];

  // 2. combine random elements in each array to form a sentence
  // create a function ro randomly slect an elemt in an array
  function selectArrayElement(arrayName, arrayLength) {
    // 1. Generate a random number based on the length of arrayNmae
    let randomNumber = Math.floor(Math.random() * arrayLength);

    // 2.Assign an element from the arrayNmae to be returned
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }

  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhen = selectArrayElement(when, when.length);

  // use the random number generator to select each element in the arrays
  // let randomNumber = Math.floor(Math.random() * who.length);
  // let randomWhoElement = who[randomNumber];

  // randomNumber = Math.floor(Math.random() * action.length);
  // let randomActionElement = action[randomNumber];

  // randomNumber = Math.floor(Math.random() * what.length);
  // let randomWhatElement = what[randomNumber];

  // randomNumber = Math.floor(Math.random() * when.length);
  // let randomWhenElement = when[randomNumber];

  // string tempolates
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  // randomWhoElement +
  // " " +
  // randomActionElement +
  // " " +
  // randomWhatElement +
  // " " +
  // randomWhenElement;
  // 3. print the excuse on the terminal, and them in the browser

  //retrieving html elements to manipulate
  const htmlElement = (document.querySelector(".excuse").innerHTML = excuse);
  // htmlElement.innerHTML = excuse;
};
