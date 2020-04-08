import React from 'react'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	
	changeScreen=(value)=>{
		this.props.setScreen(value);
	}



	render() {
		return (
			<div>
				<p>estou na home</p>
				<button onClick={()=>this.changeScreen("allcategory")}>Quero comprar</button>
				<button onClick={()=>this.changeScreen("createads")}>Quero vender</button>
			</div>
		)
	}
}