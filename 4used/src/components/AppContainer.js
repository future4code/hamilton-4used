import React from 'react'
import axios from "axios";
import AllCategory from './AllCategory'
import Header from './Header'
import Footer from './Footer'
import CreateAds from './CreateAds'
import Home from './Home'
import MarketCar from './MarketCar'
import Products from './Products'
import Search from './Search'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			screen: "home",
			arrayProducts: [],
			arrayProductsSearch:[]
		}
	}

	setScreen=(value)=>{
		this.setState({screen: value})
	}

	setSearchArray=(value)=>{
		this.setState({arrayProductsSearch: value})
	}

	getProductsApi = () => {
		axios
            .get(
                "https://us-central1-future-apis.cloudfunctions.net/fourUsed/products"
            ).then(response => {
                this.setState({arrayProducts: response.data.products})
            }).catch(err => {
                console.log(err.message)
			})
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
				return <Products setScreen={this.setScreen} 
								 arrayProducts={this.state.arrayProducts}/>

			case "search":
				return <Search arrayProductsSearch={this.state.arrayProductsSearch}/>

			default:
				return <div>fail</div>
		}
	}

	componentDidMount() {
		this.getProductsApi()
	}


	render() {
		return (
			<div>
				<Header setScreen={this.setScreen} 
						arrayProducts={this.state.arrayProducts}
						setSearchArray={this.setSearchArray}/>
					{this.currentScreen()}
				<Footer/>
			</div>
		)
	}
}