import React from 'react'
import AllCategory from './AllCategory'
import Header from './Header'
import Footer from './Footer'
import CreateAds from './CreateAds'
import Home from './Home'
import MarketCar from './MarketCar'
import Products from './Products'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			screen: "home"
		}
	}
	setScreen=(value)=>{
		this.setState({screen: value})
	}


	currentScreen=()=>{
		switch(this.state.screen){
			case "home":
				return <Home setScreen={this.setScreen}/>
			case "allcategory":
				return <AllCategory setScreen={this.setScreen}/>
			case "createads":
				return <CreateAds setScreen={this.setScreen}/>
			case "products":
				return <Products setScreen={this.setScreen}/>
			default:
				return <div>fail</div>
		}
	}


	render() {
		return (
			<div>
				<Header setScreen={this.setScreen}></Header>
					{this.currentScreen()}
				<Footer></Footer>
			</div>
		)
	}
}