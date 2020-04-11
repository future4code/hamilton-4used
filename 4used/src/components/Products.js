import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const PageContainer = styled.div`
	margin-left: 10%;
	margin-right:10%;
	padding-top: 20px;
	padding-bottom: 40px;
`

const PageTitle = styled.h2`
	margin-top: 30px;
	margin-bottom: 30px;
	font-size:2em;
	color:#434347;
`
const InputFilter = styled.input` 
	margin-left: 5px;
	margin-right: 20px;
	border: #FFFFFF;
	border-bottom: 1px black solid;
	width: 80px;
`

const SelectOrder = styled.select`
	height: 30px;
	border-radius: 5px;
	margin-right: 40px;
`

const ContainerGrid = styled.div`
	margin-top: 40px;
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


export default class Products extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			inputMax: Infinity,
			inputMin: null,
			inputSelect: "nenhum",
		}
	}

	onChangeInputMax = (event) => {
		if (event.target.value === "") {
			this.setState({ inputMax: Infinity })
		} else {
			this.setState({ inputMax: event.target.value });
		}
	}

	onChangeInputMin = (event) => {
		if (event.target.value === "") {
			this.setState({ inputMin: null })
		} else {
			this.setState({ inputMin: event.target.value });
		}
	}


	onChangeinputSelect = (event) => {
		this.setState({ inputSelect: event.target.value })
	}


	//tem que melhorar, para não ficar em cascata!
	intCascate = () => {
		const filterCategory = this.props.arrayProducts.filter(product => {
			return (product.category === this.props.selectCategory)
		})
		return this.filterPrice(filterCategory);
	}

	filterPrice = (filterCategory) => {
		const arrayFilter = filterCategory.filter(product => {
			return ((product.price >= this.state.inputMin) && (product.price <= this.state.inputMax))
		})
		return this.filterOrdenation(arrayFilter);
	}

	filterOrdenation = (arrayFilter) => {
		switch (this.state.inputSelect) {
			case "nenhum":
				return this.renderProducts(arrayFilter);

			case "crescente":
				const AscendingArray = arrayFilter.sort((a, b) => a.price - b.price);
				return this.renderProducts(AscendingArray);

			case "decrescente":
				const DescendingArray = arrayFilter.sort((b, a) => a.price - b.price);
				return this.renderProducts(DescendingArray);

			default:
				return this.renderProducts(arrayFilter);
		}
	};

	renderProducts = (orderedArray) => {
		const allProducts = orderedArray.map(product => {
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
		return allProducts;
	}

	changeScreen = () => {
		this.props.setScreen("allcategory");
	}

	render() {
		return (
			<PageContainer>
				<PageTitle>Aqui tem mais itens similares:</PageTitle>
				<label>Preço mínimo: </label>
				<InputFilter onChange={this.onChangeInputMin} />
				<label>Preço máximo:</label>
				<InputFilter onChange={this.onChangeInputMax} />
				<SelectOrder onChange={this.onChangeinputSelect}>
					<option value="nenhum">ORDENAR</option>
					<option value="crescente">menor preço</option>
					<option value="decrescente">maior preço</option>
				</SelectOrder>
				
				<Button onClick={this.changeScreen} size="small" color="primary" variant="contained">Ver categorias</Button>
				
				<ContainerGrid>
					{this.intCascate()}
				</ContainerGrid>
			</PageContainer>

		)
	}
}