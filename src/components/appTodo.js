import React from "react";


export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			list: ["Use de react aplication", "Resolve code", "Finish homework"]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onRemoveItem = this.onRemoveItem.bind(this);
	}
	onRemoveItem = i => {
		this.setState(state => {
			const list = this.state.list.filter((item, j) => i !== j);

			return {
				list
			};
		});
	};

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState(state => {
			const list = [...state.list, state.value];

			return {
				list,
				value: ""
			};
		});
	};

	render() {
		return (

			<div className="container ">
				<div className="header">TODO List</div>
				<div className="todo-list ">
					<div className="list justify-content-center">
					<ul class=" list-group mx-auto justify-content-center">
							<div className=" list-group-item input">
								<form
									className="form-control form-control-lg"
									onSubmit={this.handleSubmit}>
									<label>
										<input
											className="border-0 "
											placeholder="Add New todo?"
											type="text"
											value={this.state.value}
											onChange={this.handleChange}
										/>
									</label>
								</form>
							</div>

							{this.state.list.map((item, index) => (
								<li className="list-group-item" key={item}>
									{item}
									<button
										className="float-right btn btn-outline border-0"
										type="button"
										onClick={() =>
											this.onRemoveItem(index)
										}>
										X
									</button>
								</li>
							))}
							<li className="list-group-item ">
								<p className="footnote">
									{this.state.list.length} items left
								</p>
							</li>
						</ul>
					</div>
				</div>
					<div>
					</div>
			</div>


		);
	}
}
