import React from 'react';
import styled from 'styled-components';

const ContainerAllCategory = styled.div`

`
const DivFilters = styled.div`
`

const DivCard1 = styled.div`
	height:200px;
	width:400px;
	position:relative;
	background-color: pink;
	display:grid;
	grid-template-columns: repeat(6 , 1fr);
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;

	div{
		border: 1px solid black;
	}

	div:nth-child(1){
		grid-column:1/3;
		grid-row:1/3;
	}
	div:nth-child(2){
		grid-column:3;
		grid-row:1;
	}
	div:nth-child(3){
		grid-column:3;
		grid-row:2;
	}
	div:nth-child(4){
		grid-column:4;
		grid-row:1;
	}
	div:nth-child(5){
		grid-column:4;
		grid-row:2;
	}
	div:nth-child(6){
		grid-column:5/7;
		grid-row:1/3;
	}
`

const ImgCard = styled.img`
	height: 100%;
	width: 100%;
`
const TitleCard = styled.div`

`

const DivCard2 = styled.div`
	height:200px;
	width:400px;
	position:relative;
	background-color: pink;
	display:grid;
	grid-template-columns: repeat(6 , 1fr);
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;

	div{
		border: 1px solid black;
	}

	div:nth-child(1){
		grid-column:1;
		grid-row:1;
	}
	div:nth-child(2){
		grid-column:1;
		grid-row:2;
	}
	div:nth-child(3){
		grid-column:2/4;
		grid-row:1/3;
	}
	div:nth-child(4){
		grid-column:4;
		grid-row:1;
	}
	div:nth-child(5){
		grid-column:4;
		grid-row:2;
	}
	div:nth-child(6){
		grid-column:5/7;
		grid-row:1/3;
	}
`

const DivMarkCar = styled.div`
`




export default class AllCategory extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
		<ContainerAllCategory>
			<DivFilters>
				<input placeholder="Busca"/>
				<select>
					<option>Ordenação</option>
					<option>A - Z</option>
					<option>Z - A</option>
				</select>
			</DivFilters>

			<TitleCard>
				<h2>JÁ QUE ESTAMOS EM CASA</h2>
				<p>vamos deixar tudo bem lindo</p>
			</TitleCard>
			<DivCard1>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
			</DivCard1>

			<TitleCard>
				<h2>JÁ QUE ESTAMOS EM CASA</h2>
				<p>vamos deixar tudo bem lindo</p>
			</TitleCard>
			<DivCard2>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
			</DivCard2>

			<DivMarkCar>
				
				{this.props.children}
			</DivMarkCar>
		</ContainerAllCategory>
		)
	}
}