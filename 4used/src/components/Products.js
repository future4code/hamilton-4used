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
		this.state={
			inputMax: Infinity,
			inputMin: null,
			inputSelect:"nenhum",
			inputSearch:"",
		}
	}

	onChangeInputMax=(event)=>{
		if(event.target.value===""){
			this.setState({inputMax: Infinity})
		}else{
			this.setState({inputMax: event.target.value});
		}
	}

	onChangeInputMin=(event)=>{
		if(event.target.value==""){
			this.setState({inputMin: null})
		}else{
			this.setState({inputMin: event.target.value});
		}
	}

	onChangeInputSearch=(event)=>{
		this.setState({inputSearch: event.target.value});
	}
	onChangeinputSelect=(event)=>{
		this.setState({inputSelect: event.target.value})
	}



//falta decidirmos o que fazer com a função search, mas ela já retorna a array com os resultados
	filterSearch=()=>{
		const arraySearch = this.props.arrayProducts.filter((product)=>{
			const productlowerCase = product.name.toLowerCase();
			const searchText = this.state.inputSearch.toLowerCase();

			return (productlowerCase.includes(searchText));
		})
			return (console.log(arraySearch));
	}


//tem que melhorar, para não ficar em cascata!
	filterPrice=()=>{
		const arrayFilter = this.props.arrayProducts.filter(product=>{
			return ((product.price>=this.state.inputMin) && (product.price<=this.state.inputMax))
		})
		return this.filterOrdenation(arrayFilter);
	}

	filterOrdenation=(arrayFilter)=>{
		switch (this.state.inputSelect){
			case "nenhum":
				return this.renderProducts(arrayFilter);

			case "crescente":
				const AscendingArray = arrayFilter.sort((a , b)=> a.price - b.price);
				return this.renderProducts(AscendingArray);

			case "decrescente":
				const DescendingArray = arrayFilter.sort((b , a)=> a.price - b.price);
				return this.renderProducts(DescendingArray);
		}
	};

	renderProducts = (orderedArray) => {
		const allProducts = orderedArray.map(product => {
			return <Box key={product.id}>
				<CardContent>
					<Title>{product.name} </Title>
					<DivDescricao>
						<ItemImage src={product.photos} alt={"imagem"} />
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

				<label>Preço máxima</label>
				<input onChange={this.onChangeInputMax}/>
				<label>Preço mínimo</label>
				<input onChange={this.onChangeInputMin}/>
				<button>Filtrar</button>
				<select onChange={this.onChangeinputSelect}>
					<option value="nenhum">Ordenação</option>
					<option value="crescente">menor - maior</option>
					<option value="decrescente">maior - menor</option>
				</select>
				<input placeholder="Busca" onChange={this.onChangeInputSearch}/>
				<button onClick={this.filterSearch}>Buscar</button>

				<PageTitle>Products</PageTitle>




				<ContainerGrid>
					{this.filterPrice()}
				</ContainerGrid>
			</PageContainer>

		)
	}
}