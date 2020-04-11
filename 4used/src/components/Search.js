import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Sad from "../img/ghost.png"

const SearchContainer = styled.div`
	margin: 5% 10%;
`
const PageTitle = styled.h2`
	font-size:2em;
	color:#434347;
`
const ContainerGrid = styled.div`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: repeat(4, 1fr);
	background-color: #fff;
	color: #444;
`

const Box = styled.div`
	border:1px  solid #434347;
	border-radius: 15px;
	box-shadow: 2px 2px 2px #434347;
`

const CardContent = styled.div`
	height: 80%;
	display:flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;
`

const Title = styled.h3`
	text-align:center;
	font-size: 1.2em;
	color:#434347;
`

const DivDescription = styled.div`
	display:flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 5px;
`

const ItemImage = styled.img`
	object-fit: cover;
	height: 150px;
`

const DivButton = styled.div`
	margin: 10px;
`
const ImageNotFound = styled.img`
	height: 150px;
`


export default class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	renderProducts = () => {
		if (this.props.arrayProductsSearch.length === 0) {
			return <>
				<h4>Infelizmente não encontramos</h4>
				<ImageNotFound src={Sad}></ImageNotFound>
			</>

		} else {
			const searchProducts = this.props.arrayProductsSearch.map(product => {
				return (
					<Box key={product.id}>
						<CardContent>
							<Title>{product.name} </Title>
							<ItemImage src={product.photos} alt={"imagem"} />
							<DivDescription>
								<p> <strong>R$:</strong> {product.price}
								</p>
								<p>{product.description}
								</p>
							</DivDescription>
						</CardContent>
						<DivButton>
							<Button size="medium" color="secondary" variant="fab"
								onClick={() => this.props.addToCart(product)}> <ShoppingBasketIcon /> </Button>
						</DivButton>
					</Box>)
			})
			return searchProducts;
		}
	}


	render() {
		return (
			<div>
				<SearchContainer>
					<PageTitle>Resultados da busca:</PageTitle>
					<ContainerGrid>
						{this.renderProducts()}
					</ContainerGrid>
				</SearchContainer>
			</div>

		)
	}
}
