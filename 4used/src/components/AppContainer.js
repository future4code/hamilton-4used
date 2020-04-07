import React from 'react'
/* import AllCategory from './AllCategory' */
import Header from './Header'
import Footer from './Footer'
import CreateAds from './CreateAds'
/* import Home from './Home'
import MarketCar from './MarketCar'
import Products from './Products' */

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<Header></Header>
{/* 			<AllCategory></AllCategory> */}
			<CreateAds></CreateAds>
{/* 			<Home></Home>
			<MarketCar></MarketCar>
			<Products></Products> */}
			<Footer></Footer>
		</div>
	}
}