import React from 'react';
import styled from 'styled-components';

const ContainerAllCategories = styled.div`
`
const Category = styled.div`
	padding-bottom: 15px;
`
const DivCard1 = styled.div`
	margin-left: 10%;
	margin-bottom: 15px;
	height: 80%;
	width: 80%;
	position:relative;
	display:grid;
	grid-template-columns: repeat(6 , 1fr);
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;


	div{
		border: 1px solid black;
		border-radius: 10px;
	}

	div:nth-child(1){
		grid-column:1/3;
		grid-row:1/3;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(2){
		grid-column:3;
		grid-row:1;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(3){
		grid-column:3;
		grid-row:2;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(4){
		grid-column:4;
		grid-row:1;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(5){
		grid-column:4;
		grid-row:2;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(6){
		grid-column:5/7;
		grid-row:1/3;
		display:flex;
		align-items:center;
		justify-content: center;
	}
`
const ImgCard1 = styled.img`
	height: 240px;
	object-fit: cover;
`
const ImgCard2 = styled.img`
	height: 150px;
	object-fit: cover;
`
const TitleCard = styled.div`
	margin-left: 10%;
	color:#434347;
`
const DivCard2 = styled.div`
	margin-left: 10%;
	margin-right: 10%;
	margin-bottom: 15px;
	height: 50%;
	width: 80%;
	position:relative;
	display:grid;
	grid-template-columns: repeat(6 , 1fr);
	grid-template-rows: 1fr 1fr;
	grid-gap: 10px;

	div{
		border: 1px solid black;
		border-radius: 10px;
	}

	div:nth-child(1){
		grid-column:1;
		grid-row:1;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(2){
		grid-column:1;
		grid-row:2;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(3){
		grid-column:2/4;
		grid-row:1/3;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(4){
		grid-column:4;
		grid-row:1;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(5){
		grid-column:4;
		grid-row:2;
		display:flex;
		align-items:center;
		justify-content: center;
	}
	div:nth-child(6){
		grid-column:5/7;
		grid-row:1/3;
		display:flex;
		align-items:center;
		justify-content: center;
	}
`


export default class AllCategories extends React.Component {

	changeScreen=(category)=>{
		this.props.setSelectCategory(category);
		this.props.setScreen("products");
	}

	renderCategories = (type, title, subtitle, style) => {
        const filterByCategory = this.props.arrayProducts.filter(category => {
            return (category.category === type)
		})

        let arrayImagens = [];
        for(let i=0;i<=5;i++){
            arrayImagens.push(filterByCategory[i].photos)
		}		 
			
		function cardStyle() {
		
			let imagesProducts;

			switch(style){
				case 1:
					imagesProducts = arrayImagens.map((element,index)=>{
						if (index===0 || index===5){
							return(<div key={index}><ImgCard1 src={element}/></div>)
						}else{
							return(<div key={index}><ImgCard2 src={element}/></div>)
						}
					})

					return (<DivCard1>{imagesProducts}</DivCard1>);

				case 2:
					imagesProducts = arrayImagens.map((element,index)=>{
						if (index===2 || index===5){
							return(<div key={index}><ImgCard1 src={element}/></div>)
						}else{
							return(<div key={index}><ImgCard2 src={element}/></div>)
						}
					})

					return (<DivCard2>{imagesProducts}</DivCard2>);

				default:
					return(<div>Não conseguimos acessar esta categoria, por favor informar ao suporte.</div>);
			}
		}

        return (<Category onClick={()=>this.changeScreen(type)}>
                	<TitleCard>
                		<h2>{title}</h2>
                		<p>{subtitle}</p>
               		</TitleCard>

   				{cardStyle()}

             	</Category> )
	}
	


	render() {
		return (
		<ContainerAllCategories>

			{this.renderCategories("games", "Gamers e quarenteners", "jogos para matar o tédio", 1)}
			{this.renderCategories("Jogos de tabuleiro", "Jogos de tabuleiro", "colocando as cartas na mesa", 2)}
			{this.renderCategories("Headphones", "Headphones", "para todas as vídeo-chamadas", 1)}
			{this.renderCategories("livros", "Livros para sua quarentena", "viajando dentro de casa", 2)}
			{this.renderCategories("decoracao", "Já que estamos em casa", "por que não deixar seu cantinho mais lindo?", 1)}
			{this.renderCategories("pet", "Brinquedos para seu pet", "ele merece se divertir", 2)}
			{this.renderCategories("artesanato", "Itens para fazer artesanato", "de vida para suas ideias", 1)}
			{this.renderCategories("brinquedos", "Brinquedos", "para distrair seu filho na quarentena", 2)}
			{this.renderCategories("treino", "Para treinar sem sair de casa", "a maromba não pode parar", 1)}
			
		</ContainerAllCategories> 
		)
	}
}