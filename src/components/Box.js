import React from "react";

const Box = (props) => {
	let result;
	if (
		props.title === "Computer" &&
		props.result !== "draw" &&
		props.result !== ""
	) {
		result = props.result === "win" ? "lose" : "win";
	} else {
		result = props.result;
	}
	console.log("result: ?", result);
	return (
		<div className={`box ${result}`}>
			<h1>{props.title}</h1>
			<img
				className="item-img"
				src={props.item && props.item.img}
				alt={props.item && props.item.name}
			/>
			<h2>{result}</h2>
		</div>
	);
};

export default Box;
