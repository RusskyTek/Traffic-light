import React, { useState } from "react";
import { Footer } from "./footer.js";

//primer componente
const Semaforo = () => {
	const [selected, setSelected] = useState(""); //selected es estado --- setSelected funcion que modifica estado

	return (
		<React.Fragment>
			<div className="container">
				<div id="semaforo">
					<div
						className={
							"red light " +
							(selected === "red" ? "selected" : "")
						}
						onClick={() => {
							setSelected("red");
						}}
					/>
					<div
						className={
							"yellow light " +
							(selected === "yellow" ? "selected" : "")
						}
						onClick={() => {
							setSelected("yellow");
						}}
					/>
					<div
						className={
							"green light " +
							(selected === "green" ? "selected" : "")
						}
						onClick={() => {
							setSelected("green");
						}}
					/>
				</div>
			</div>

			<Footer />
		</React.Fragment>
	);
};

export default Semaforo;
