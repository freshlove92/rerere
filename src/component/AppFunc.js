import { useState } from 'react';
import Box from "./Box";


// /function////
// 1. 박스 두개 / 나 와 컴퓨터 = title /  사진 / 결과
// 2. 가위바위보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값 + 사진이 보임
// 4. 컴퓨터는 랜덤하게 나와야 함
// 5. 3 4의 결과로 승패를 가린다
// 6. 승패의 결과를 테두리 색으로 표현해준다(이기면 파랑, 지면 빨강, 비기면 검정)


// 배열에 자동으로 들어간 인덱스 번호를 이용할거야
// 객체를 우선 배열로 바꿔주자! (어려울듯)
const Choice ={
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

function AppFunc() {
  const [userSelect, setUserSelect]=useState()
  const [computerSelect, setComputerSelect]=useState()
  const [userResult, setUserResult]=useState()
  const [computerResult, setComputerResult]=useState()
  const [userBoxColor,setUserBoxColor]=useState()
  const [computerBoxColor,setComputerBoxColor]=useState()
  // console.log(userBoxColor, computerBoxColor)


//유저가 버튼을 누를때!
  const play =(userChoice)=>{
    // console.log("여기다", userChoice)
    setUserSelect(Choice[userChoice])

    let computerChoice = randomChoice()
    // console.log("컴퓨터가 선택한 랜덤한 값", computerChoice)
    //computerChoice는 randomChoice야
    //randomChoice?그게 뭔데?▽▽▽
    
    setComputerSelect(computerChoice)
    
    const userFinal = userJudgement(Choice[userChoice],computerChoice)
    const computerFinal = computerJudgement(Choice[userChoice],computerChoice)

    setUserResult(userFinal)
    setComputerResult(computerFinal)

    if (userFinal==="이겼다!"){
      setUserBoxColor("blue")
      setComputerBoxColor("red")
    } else if (userFinal==="졌다ㅠㅠ"){
      setUserBoxColor("red")
      setComputerBoxColor("blue")
    } else {
      setUserBoxColor("black")
      setComputerBoxColor("black")
    }
    
        
  }

  const userJudgement =(user,computer)=>{
    // console.log("user",user,"computer",computer) 
    //어떻게 알았을까?(매개변수) user=Choice[userChoice] / computer=computerChoice

    //가위바위보 게임의 로직 > 내는거 비교해서 승패 가르기
    //나: 가위 컴: 가위 -> 비김
    //나: 가위 컴: 바위 -> 컴 이김
    //나: 가위 컴: 보 -> 컴 짐

    //나: 바위 컴: 가위 -> 나 이김
    //나: 바위 컴: 바위 -> 비김
    //나: 바위 컴: 보 -> 컴 이김

    //나: 보 컴: 가위 -> 컴 이김
    //나: 보 컴: 바위 -> 컴 짐
    //나: 보 컴: 보 -> 비김

    if(user.name === computer.name){
      return "무승부~";
    }else if(user.name === "Rock") return computer.name === "Scissors"? "이겼다!" : "졌다ㅠㅠ";
    else if(user.name === "Scissors") return computer.name === "Paper"? "이겼다!" : "졌다ㅠㅠ";
    else if(user.name === "Paper") return computer.name === "Rock"? "이겼다!" : "졌다ㅠㅠ";
  }

  const computerJudgement =(user,computer)=>{
    if(user.name === computer.name){
      return "무승부~";
    }else if(computer.name  === "Rock") return user.name === "Scissors"? "이겼다!" : "졌다ㅠㅠ";
    else if(computer.name  === "Scissors") return user.name === "Paper"? "이겼다!" : "졌다ㅠㅠ";
    else if(computer.name  === "Paper") return user.name === "Rock"? "이겼다!" : "졌다ㅠㅠ";
  }

  const randomChoice =()=>{
   
    let itemArray = Object.keys(Choice) 
    //Object.keys(어쩌구) -> 객체의 키값으로 배열을 만들어주는 함수
    // console.log("아이템 어레이에는 뭐가 들어있을까?",itemArray) 
    //객제인 choice의 키값을 가져왔네! -> 0 rock, 1 scissors, 2 paper 
    // 근데 얘네가 배열이 되서 자동 인덱스번호가 생겼네 0,1,2
    
    let randomItem = Math.floor(Math.random()*itemArray.length);
    // console.log("랜덤아이템 함수에 들어가는 값은?", randomItem)
    // 여기서 랜덤한 숫자를 뽑아냄 0,1,2

    let final = itemArray[randomItem]
    // console.log("itemArray 안에있는 가위바위보 중에 랜덤으로 뽑은거",final)
    //final = itemArray[0] = rock
    //final = itemArray[1] = scissors
    //final = itemArray[2] = paper

    return Choice[final] 
    //지금까지 만든건 computerChoice라고 선언한 randomChoice라는 함수였고 
    //그 최종 값은 computerChoice로 들어간다

    //computerChoice = Choice[rock] = name: "Rock", img: "./img/주먹.jpg"
    //컴퓨터가 랜덤하게 선택한 값에 연결되어 있는 img가 필요해

  } 

  return (
    <>
    <div className="group">   
        <div className='main'>
        <Box title="나" item={userSelect} userResult={userResult} userBoxColor={userBoxColor}/>
        <Box title="컴퓨터" item={computerSelect} computerResult={computerResult} computerBoxColor={computerBoxColor}/>
        </div>
        <br />
        <br />
        <div className='main'>
        <button className='btn' onClick={()=>play("scissors")}>가위</button>
        <button className='btn' onClick={()=>play("rock")}>바위</button>
        <button className='btn' onClick={()=>play("paper")}>보</button>
        </div>
    </div>
    </>
    
  );
}

export default AppFunc;
