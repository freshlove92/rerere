import Box from "./Box";
import { Component } from "react";

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

class AppClass extends Component {
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
        <div className="group">
            <div className='main'>
            <Box title="나" item={this.state.userSelect} userResult={this.state.userResult} userBoxColor={this.state.userBoxColor} />
            <Box title="컴퓨터" item={this.state.computerSelect} computerResult={this.state.computerResult} computerBoxColor={this.state.computerBoxColor} />
            </div>
            <br />
            <br />
            <div className='main'>
            <button className='btn' onClick={() => this.play("scissors")}>가위</button>
            <button className='btn' onClick={() => this.play("rock")}>바위</button>
            <button className='btn' onClick={() => this.play("paper")}>보</button>
            </div>
        </div>
      </>
    );
  }
}

export default AppClass;