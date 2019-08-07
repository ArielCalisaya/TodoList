import React from "react";


export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//valuetext de placeholder
			value: "",
			list: ["Use de react aplication", "Resolve code", "Finish homework"]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	//Expres como se comportará al remover un itemList
	removeItem = str => {
		this.setState(state => {
			const list = this.state.list.filter((item, rmText) => str !== rmText);
			return {
				list
			};
		});
	};

	handleChange(event) {
		//Event target muesta resultado de value para escribir TODO en placeholder
		this.setState({ value: event.target.value });
	}

//Despues de agregar TODO SE guarda el dato en la ventana
	handleSubmit = e => {
		e.preventDefault();
		this.setState(state => {
			//state.value muestra el submit realizado desde placeholder
			//"...state.list" Muestra string del estado list y ... los separa por item
//Mostra todo despues de input como Text o TODO en html
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
									//Activa handleSubmit despues de pressionar enter en placeholder
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
											this.removeItem(index)
										}>
										X
									</button>
								</li>
							))}
							<li className="list-group-item ">
								<p className="footnote">
									N{this.state.list.length} items left
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
