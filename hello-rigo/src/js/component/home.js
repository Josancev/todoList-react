import React from "react";
import shortid from "shortid";
import { formTodo } from "./formTodo";
//import formTodo from "./component/formTodo.js";

//create your first component
export class Home extends React.Component {
	state = {
		text: ""
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit({
			id: shortid.generate(), //npm install shoertid
			text: this.state.text,
			complete: false
		});
		//submit
		this.setState({
			text: ""
		});
	};

	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}
