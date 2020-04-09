import React from 'react';
import styled from 'styled-components';

const ContainerAllCategory = styled.div`

`
const DivFilters = styled.div`
`

const Category = styled.div``


const DivCard1 = styled.div`
	height:200px;
	width:400px;
	position:relative;
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


	changeScreen=()=>{
		this.props.setScreen("products")
	}

	renderCategories = (type, title, subtitle, style) => {
        const filterByCategory = this.props.arrayProducts.filter(category => {
            return (category.category === type)
		})

        let arrayImagens = [];
        for(let i=0;i<=5;i++){
            arrayImagens.push(filterByCategory[i].photos)
		}
		
        const imagesProducts = arrayImagens.map(element=>{
             return(<div><ImgCard src={element}/></div>)
			})
		
		function cardStyle() {
			switch(style){
				case 1:
					return (<DivCard1>{imagesProducts}</DivCard1>);
				case 2:
					return (<DivCard2>{imagesProducts}</DivCard2>);
				default:
					return(<DivCard1>{imagesProducts}</DivCard1>);
			}
		}

        return (<Category>
                	<TitleCard>
                		<h2>{title}</h2>
                		<p>{subtitle}</p>
               		</TitleCard>

   				{cardStyle()}

             	</Category> )
	}
	


	render() {
		return (
		<ContainerAllCategory>
			<DivFilters>
				<select>
					<option>Ordenação</option>
					<option>A - Z</option>
					<option>Z - A</option>
				</select>
			</DivFilters>

			{this.renderCategories("games", "Gamers e quarenteners", "jogos para matar o tédio", 1)}
			{this.renderCategories("Jogos de tabuleiro", "Jogos de tabuleiro", "colocando as cartas na mesa", 2)}
			{this.renderCategories("Headphones", "Headphones", "para todas as vídeo-chamadas", 1)}
			{this.renderCategories("livros", "Livros para sua quarentena", "viajando dentro de casa", 2)}
			{this.renderCategories("decoracao", "Já que estamos em casa", "por que não deixar seu cantinho mais lindo?", 1)}
			{this.renderCategories("pet", "Brinquedos para seu pet", "ele merece se divertir", 2)}
			{this.renderCategories("artesanato", "Itens para fazer artesanato", "de vida para suas ideias", 1)}
			{this.renderCategories("brinquedos", "Brinquedos", "para distrair seu filho na quarentena", 2)}
			{/* {this.renderCategories("treino", "Para treinar sem sair de casa", "a maromba não pode parar", 1)} */}
			

			
			{/* <Category onClick={this.changeScreen}>
				<TitleCard>
					<h2>Gamers e quarenteners</h2>
					<p>jogos para matar o tédio</p>
				</TitleCard>
				<DivCard1>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard1>
			</Category>

			<Category>
				<TitleCard>
					<h2>Jogos de tabuleiro</h2>
					<p>colocando as cartas na mesa</p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>
			<Category>
				<TitleCard>
					<h2>Headphones</h2>
					<p>para todas as vídeo-chamadas </p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>
			<Category>
				<TitleCard>
					<h2>Livros para sua quarentena</h2>
					<p>viajando dentro de casa</p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>
			<Category>
				<TitleCard>
					<h2>Já que estamos em casa</h2>
					<p>por que não deixar seu cantinho mais lindo?</p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>
			<Category>
				<TitleCard>
					<h2>Brinquedos para seu pet</h2>
					<p>ele merece se divertir</p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>
			<Category>
				<TitleCard>
					<h2>Itens para fazer artesanato</h2>
					<p>de vida para suas ideias</p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>
			<Category>
				<TitleCard>
					<h2>Brinquedos</h2>
					<p>para distrair seu filho na quarentena</p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>
			<Category>
				<TitleCard>
					<h2>Para treinar sem sair de casa</h2>
					<p>a maromba não pode parar</p>
				</TitleCard>
				<DivCard2>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
					<div><ImgCard src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"}/></div>
				</DivCard2>
			</Category>

			<DivMarkCar>
				{this.props.children}
			</DivMarkCar>*/}
		</ContainerAllCategory> 
		)
	}
}