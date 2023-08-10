import { useState } from "react";
import Box from "./components/Box";
import "./App.css";

const choice = {
	rock: {
		name: "Rock",
		img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
	},
	scissors: {
		name: "Scissors",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png?20170424024710",
	},
	paper: {
		name: "Paper",
		img: "https://img.freepik.com/premium-vector/crumpled-paper-ball_420555-213.jpg?w=2000",
	},
};
function App() {
	const [userSelect, setUserSelect] = useState(null);
	const [comSelect, setComSelect] = useState(null);
	const [result, setResult] = useState("");

	const play = (userChoice) => {
		console.log(userChoice);
		setUserSelect(choice[userChoice]);
		let comChoice = randomChoice();
		console.log(comChoice);
		setComSelect(choice[comChoice]);
		setResult(judgement(choice[userChoice], choice[comChoice]));
	};
	const randomChoice = () => {
		let itemArray = Object.keys(choice);
		let randomItem = Math.floor(Math.random() * itemArray.length);
		let final = itemArray[randomItem];
		return final;
	};
	const judgement = (user, com) => {
		console.log(user, com);
		if (user.name === com.name) {
			return "draw";
		} else if (user.name === "Rock") {
			return com.name === "Scissors" ? "win" : "lose";
		} else if (user.name === "Scissors") {
			return com.name === "Paper" ? "win" : "lose";
		} else if (user.name === "Paper") {
			return com.name === "Rock" ? "win" : "lose";
		}
	};

	return (
		<div>
			<div className="main">
				<Box title="You" item={userSelect} result={result} />
				<Box title="Computer" item={comSelect} result={result} />
			</div>
			<div className="main">
				<button onClick={() => play("scissors")}>가위</button>
				<button onClick={() => play("rock")}>바위</button>
				<button onClick={() => play("paper")}>보</button>
			</div>
		</div>
	);
}

export default App;

// {/*
// 			1. 박스2개
// 			2. 가위바위보 버튼
// 			3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 			4. 컴퓨터는 랜덤하게 아이템이 선택된다.
// 		5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다. */}
