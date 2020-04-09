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


	changeScreen=()=>{
		this.props.setScreen("products")
	}

	renderCategories = (CATEGORIA) => {
        const games = this.props.arrayProducts.filter(category => {
            return (category.category === CATEGORIA)
        })
        let arrayImagens = [];
        for(let i=0;i<=5;i++){
            arrayImagens.push(games[i].photos)
        }
        console.log(arrayImagens);
        const teste = arrayImagens.map(element=>{
             return(<div><ImgCard src={element}/></div>)
            })
        return (<Category>
                <TitleCard>
                <h2>ATRIBUTO TITULO</h2>
                <p>ATRIBUTO SUBTITULO</p>
                </TitleCard>
                <DivCard2>
                    {teste}
               </DivCard2>
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
			{this.renderCategories("games")}
			<Category onClick={this.changeScreen}>
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
			</DivMarkCar>
		</ContainerAllCategory>
		)
	}
}