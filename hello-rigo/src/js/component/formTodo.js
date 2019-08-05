import React from "react";
import { Home } from "./home";
export class formTodo extends React.Component {
	state = {
		todos: []
	};

	addTodo = todo => {
		this.setState({
			todos: [todo, ...this.state.todos]
		});
	};
	render() {
		return (
			<div>
				<Home onSubmit={this.addTodo} />
				{JSON.stringify(this.state.todos)}
			</div>
		);
	}
}
