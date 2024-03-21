import React, { Component } from "react";
import AppClass from './component/AppClass';
import AppFunc from "./component/AppFunc";
import './App.css';

const Choice = {
  rock: {
    name: "Rock",
    img: "./img/주먹.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "./img/가위.jpg"
  },
  paper: {
    name: "Paper",
    img: "./img/보.jpg"
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userSelect: undefined,
      computerSelect: undefined,
      userResult: undefined,
      computerResult: undefined,
      userBoxColor: undefined,
      computerBoxColor: undefined
    };
  }

  play = (userChoice) => {
    const userSelect = Choice[userChoice];
    const computerSelect = this.randomChoice();
    const userFinal = this.userJudgement(userSelect, computerSelect);
    const computerFinal = this.computerJudgement(userSelect, computerSelect);

    this.setState({
      userSelect,
      computerSelect,
      userResult: userFinal,
      computerResult: computerFinal,
      userBoxColor: userFinal === "이겼다!" ? "blue" : userFinal === "졌다ㅠㅠ" ? "red" : "black",
      computerBoxColor: userFinal === "이겼다!" ? "red" : userFinal === "졌다ㅠㅠ" ? "blue" : "black"
    });
  }

  userJudgement = (user, computer) => {
    if (user.name === computer.name) {
      return "무승부~";
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "이겼다!" : "졌다ㅠㅠ";
    else if (user.name === "Scissors") return computer.name === "Paper" ? "이겼다!" : "졌다ㅠㅠ";
    else if (user.name === "Paper") return computer.name === "Rock" ? "이겼다!" : "졌다ㅠㅠ";
  }

  computerJudgement = (user, computer) => {
    if (user.name === computer.name) {
      return "무승부~";
    } else if (computer.name === "Rock") return user.name === "Scissors" ? "이겼다!" : "졌다ㅠㅠ";
    else if (computer.name === "Scissors") return user.name === "Paper" ? "이겼다!" : "졌다ㅠㅠ";
    else if (computer.name === "Paper") return user.name === "Rock" ? "이겼다!" : "졌다ㅠㅠ";
  }

  randomChoice = () => {
    const itemArray = Object.keys(Choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return Choice[itemArray[randomItem]];
  }

  render() {
    return (
      <>
        <div className="fin">
          <div>
          <h2 className="fintitle">class로 움직여요</h2>
          <AppClass />
          </div>
    
          <div>
          <h2 className="fintitle">Function으로 움직여요</h2>
          <AppFunc />
          </div>
    
        </div>
       
        
      </>
    );
  }
}
export default App;

