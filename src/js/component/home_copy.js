import React from "react";
import PropTypes from "prop-types";

//primer componente
export class Semaforo extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: ""
		};
	}
	render() {
		return (
			<div className="container">
				<div id="semaforo">
					<div
						className={
							"red light " +
							(this.state.selected == "red" ? "selected" : "") // condicional ternario
						}
						onClick={() => {
							this.setState({ selected: "red" });
						}}
					/>
					<div
						className={
							"yellow light " +
							(this.state.selected == "yellow" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "yellow" });
						}}
					/>
					<div
						className={
							"green light " +
							(this.state.selected == "green" ? "selected" : "")
						}
						onClick={() => {
							this.setState({ selected: "green" });
						}}
					/>
				</div>
			</div>
		);
	}
}

Semaforo.propTypes = {
	a: PropTypes.string,
	b: PropTypes.string,
	c: PropTypes.string
};
