import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import AdImage from "../img/anuncio.png"
import Button from '@material-ui/core/Button';

const ContainerCreateAds = styled.div`
	display: flex;
	justify-content: center;
	padding: 90px;
`
const MainContainer = styled.div`
	width: 30%;
	align-self: center;
`
const DataContainer = styled.div ` 
	margin: 15px;
`

const ImageCreateAds = styled.img` 

`

class CreateAds extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <ContainerCreateAds>
			<MainContainer>
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
				<DataContainer>
					<label>Foto do produto: </label>
					<input
					type="file"
					>
					</input>
				</DataContainer>
				<Button size="medium">Criar anúncio</Button>
			</MainContainer>
			<ImageCreateAds src={AdImage}></ImageCreateAds>
		</ContainerCreateAds>
	}
}

export default CreateAds