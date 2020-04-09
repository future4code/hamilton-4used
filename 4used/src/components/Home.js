import React from 'react'
import styled from 'styled-components'
import AdImage from "../img/anuncio.png"
import AdImage2 from "../img/comprar.png"
import Button from '@material-ui/core/Button';

const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	
	h1:nth-child(1){
		margin-left: 10%;
		padding-top: 30px;
	}
`

const MainContainerHome = styled.div` 
	margin-left: 10%;
	margin-right: 10%;
	display: flex;
	justify-content: space-between;
	height: 60vh;
`
const ContainerBuy = styled.div ` 

`
const ContainerSell = styled.div ` 
	
`

const ImageHome = styled.img` 
	height: 70%;
	cursor: pointer;
	border-radius: 15px;
	border: black dotted 2px;
`

export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}


	changeScreen = (value) => {
		this.props.setScreen(value);
	}



	render() {
		return (
			<ContainerHome>
				<h1>4 USED</h1>
				<MainContainerHome>
					<ContainerBuy>
						<h4>QUERO COMPRAR!</h4>
						<ImageHome src={AdImage2} onClick={() => this.changeScreen("allcategory")}></ImageHome>
					</ContainerBuy>
					<ContainerSell>
						<h4>QUERO VENDER!</h4>
						<ImageHome src={AdImage} onClick={() => this.changeScreen("createads")}></ImageHome>
					</ContainerSell>
				</MainContainerHome>
			</ContainerHome>
		)
	}
}