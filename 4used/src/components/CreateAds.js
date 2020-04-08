import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import AdImage from "../img/anuncio.png"
import Button from '@material-ui/core/Button';


const ContainerCreateAds = styled.div`
	display: flex;
	flex-direction: column;
	
	h1:nth-child(1){
		margin-left: 20%;
		padding-top: 30px;
	}
`

const ContainerMain = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 20%;
	padding-bottom: 100px;
`

const ContainerForm = styled.div`
	align-self: center;
	margin: 15px 0;
	width: 50%;
	margin-right: 90px;
`
const DataContainer = styled.div` 
	display: flex;
	flex-direction: column;
	margin-top: 15px;
	margin-bottom: ${
	props => props.bottom
	};
`

const ImageCreateAds = styled.img` 
	width: 40%;
	margin-right: 15%;
	object-fit: cover;
`

class CreateAds extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <ContainerCreateAds>
			<h1>Crie seu anúncio </h1>
			<ContainerMain>
				<ContainerForm>
					<DataContainer>
						<label>O que você quer vender?  </label>
						<input
							placeholder="Título do item"
						></input>
					</DataContainer>
					<DataContainer>
						<label>Descrição caprichada do produto: </label>
						<input
							placeholder="Decrição"
						></input>
					</DataContainer>
					<DataContainer>
						<label>Qual o preço do seu produto? </label>
						<input
							placeholder="R$"
							type="number"
							min="0"
						></input>
					</DataContainer>
					<DataContainer>
						<label>Quantidade de parcelas: </label>
						<select>
							<option>x 1</option>
							<option>x 2</option>
							<option>x 5</option>
							<option>x 10</option>
						</select>
					</DataContainer>
					<DataContainer>
						<label>Escolha a opção de pagamento: </label>
						<select>
							<option>Boleto bancário</option>
							<option>Cartão de Crédito</option>
						</select>
					</DataContainer>
					<DataContainer>
						<label>Qual a categoria do seu desapego? </label>
						<select>
							<option></option>
							<option></option>
						</select>
					</DataContainer>
					<DataContainer bottom={'50px'}>
						<label>A foto faz TODA diferença! Adiciona ela: </label>
						<input
							type="file"
						>
						</input>
					</DataContainer>
					<Button size="medium" color="secondary" variant="contained">Criar anúncio</Button>
				</ContainerForm>
				<ImageCreateAds src={AdImage}></ImageCreateAds>
			</ContainerMain>
		</ContainerCreateAds>
	}
}

export default CreateAds