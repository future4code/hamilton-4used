import React from 'react'
import axios from "axios";
import styled from 'styled-components'

import Header from './Header'
import Home from './Home'
import AllCategories from './AllCategories'
import Products from './Products'
import Search from './Search'
import CreateAds from './CreateAds'
import MarketCar from './MarketCar'
import Footer from './Footer'

import {Button} from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const ButtonCart = styled(Button) `
	position: absolute;
	top: 30px;
	right: 10%;
`


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			screen: "home",
			arrayProducts: [],
			arrayProductsSearch:[],
			arrayCart: [],
			isCartOpen: false,
			selectCategory: "",
		};
	}

	setScreen=(value)=>{
		this.setState({screen: value})
	}

	setSearchArray=(value)=>{
		this.setState({arrayProductsSearch: value})
	}

	setSelectCategory=(value)=>{
		this.setState({selectCategory: value});
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

	addToCart = (product) => {
		this.setState({
			arrayCart: [...this.state.arrayCart, product],
		});
		alert("Produto adicionado no carrinho com sucesso!")
	};

	removeProductToCart=(value)=>{
		const newArrayCart = this.state.arrayCart.filter(product=>{
			return (product.name!==value);
		})
		this.setState({arrayCart: newArrayCart});
	}

	toggleCart = () => {
		this.setState({
			isCartOpen: !this.state.isCartOpen,
		});
	};

	currentScreen=()=>{
		switch(this.state.screen){
			case "home":
				return <Home setScreen={this.setScreen}/>

			case "allcategories":
				return <AllCategories setScreen={this.setScreen}
									arrayProducts={this.state.arrayProducts}
									setSelectCategory={this.setSelectCategory}/>

			case "createads":
				return <CreateAds setScreen={this.setScreen}/>

			case "products":
				return <Products setScreen={this.setScreen}
								 arrayProducts={this.state.arrayProducts}
								 selectCategory={this.state.selectCategory}
								 addToCart={this.addToCart}/>
								 
			case "search":
				return <Search arrayProductsSearch={this.state.arrayProductsSearch} 
							   addToCart={this.addToCart}/>

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
				<MarketCar arrayCart={this.state.arrayCart}
						   toggleCart={this.toggleCart}
						   isCartOpen={this.state.isCartOpen}
					       removeProductToCart={this.removeProductToCart} />

				<Header setScreen={this.setScreen} 
						arrayProducts={this.state.arrayProducts}
						setSearchArray={this.setSearchArray} />

				{this.currentScreen()}

				<ButtonCart size="large" color="secondary" variant="fab"
							 onClick={this.toggleCart}> 
					<ShoppingBasketIcon />
				</ButtonCart>

				<Footer/>
			</div>
		)
	}
}

//hamilton-4used.surge.sh