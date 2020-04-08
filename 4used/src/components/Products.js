import React from 'react'
import styled from 'styled-components'
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const CardContent = styled.div`
display:flex;
flex-direction:column;

`

const Card = styled.div`
width:200px;


`
const PageContainer = styled.div`
width:1000px;
margin:0 auto;

`

const PageTitle = styled.div`
margin-top: 20vh;
margin-bottom:15vh;
font-size:2em;
color:#434347;

`

const Title = styled.h3`
text-align:center;
font-size: 1em;
color:#434347;


`
const PriceTag = styled.p`
color:#434347;
display:inline;
margin-left:1em;

`
const Img = styled.div`
`
const ItemImage = styled.img`
width: 150px;
justify-content:space-around;
 margin: 1vh;

`

const Box = styled.div`
border:1px  solid #434347;
box-shadow: 2px 2px 2px #434347 ;

`


const ContainerGrid = styled.div`
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(3, 1fr);
background-color: #fff;
color: #444;
/* grid-template-rows: repeat(3, 1fr); */

`

const DivButton = styled.div`
margin:2vh;


`
const DivDescricao = styled.div`
display:flex;

`



export default class Products extends React.Component {
	constructor(props) {
		super(props)
	}

	renderProducts = () => {
		const allProducts = this.props.arrayProducts.map(product => {
			return <Box>
				<CardContent>
					<Title>{product.name} </Title>
					<DivDescricao>
						<ItemImage src={product.photos} alt={"Gabi é nota10!"} />
						<p>Descrição: {product.description}
						</p>
						<p> Preço: {product.price}
						</p>
					</DivDescricao>
					<DivButton>
						<Button size="medium" color="secondary" variant="contained"> Comprar</Button>
					</DivButton>
				</CardContent>
			</Box>
		})

		return allProducts
	}

	render() {
		return (


			<PageContainer>

				<PageTitle>CATEGORIA</PageTitle>

				<ContainerGrid>
					{this.renderProducts()}
				</ContainerGrid>
			</PageContainer>

		)
	}
}