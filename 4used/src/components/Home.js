import React from 'react'
import styled from 'styled-components'
import AdImage from "../img/anuncio.png"
import AdImage2 from "../img/comprar.png"

const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	
	h1:nth-child(1){
		margin-left: 10%;
		padding-top: 30px;
	}
`
const PageTitle = styled.h2`
	margin-left: 10%;
	font-size:2em;
	color:#434347;
`
const Title = styled.h3 `
	color:#434347;
`

const MainContainerHome = styled.div` 
	margin-left: 10%;
	margin-right: 10%;
	display: flex;
	justify-content: space-between;
	height: 70vh;
	margin-bottom: 5%;
`
const ContainerBuy = styled.div ` 
	width: 45%;
`
const ContainerSell = styled.div ` 
	width: 45%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

const ImageHome = styled.img` 
	height: 70%;
	cursor: pointer;
	border-radius: 15px;
	border: #434347 solid 1px;
`

export default class Home extends React.Component {

	changeScreen = (value) => {
		this.props.setScreen(value);
	}

	render() {
		return (
			<ContainerHome>
				<PageTitle>Coisas úteis e inúteis para sua quarentena! </PageTitle>
				<MainContainerHome>
					<ContainerBuy>
						<Title>QUERO COMPRAR!</Title>
						<ImageHome src={AdImage2} onClick={() => this.changeScreen("allcategory")}></ImageHome>
					</ContainerBuy>
					<ContainerSell>
						<Title>QUERO VENDER!</Title>
						<ImageHome src={AdImage} onClick={() => this.changeScreen("createads")}></ImageHome>
					</ContainerSell>
				</MainContainerHome>
			</ContainerHome>
		)
	}
}