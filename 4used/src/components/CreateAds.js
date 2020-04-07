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
`
const DataContainer = styled.div` 
	margin-top: 15px;
	margin-bottom: ${
	props => props.bottom
	};
`

const ImageCreateAds = styled.img` 
	width:50%;
	margin-right: 15%;
	object-fit: cover;
`

class CreateAds extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <ContainerCreateAds>
			<h1>Desapegando</h1>
			<ContainerMain>
				<ContainerForm>
					<DataContainer>
						<label>Nome: </label>
						<input
							placeholder="Nome"
						></input>
					</DataContainer>
					<DataContainer>
						<label>Descrição: </label>
						<input
							placeholder="Descrição"
						></input>
					</DataContainer>
					<DataContainer>
						<label>Valor:  R$  </label>
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
						<label>Forma de pagamento: </label>
						<select>
							<option>Boleto bancário</option>
							<option>Cartão de Crédito</option>
						</select>
					</DataContainer>
					<DataContainer>
						<label>Categoria: </label>
						<select>
							<option></option>
							<option></option>
						</select>
					</DataContainer>
					<DataContainer bottom={'50px'}>
						<label>Foto do produto: </label>
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