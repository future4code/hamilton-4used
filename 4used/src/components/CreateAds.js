import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import AdImage from "../img/anuncio.png"
import Button from '@material-ui/core/Button';

const ContainerCreateAds = styled.div`
	display: flex;
	flex-direction: column;
	
	h1:nth-child(1){
		margin-left: 10%;
		padding-top: 30px;
	}
`

const ContainerMain = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 10%;
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
	margin-top: 20px;
	margin-bottom: ${
	props => props.bottom
	};
`
const InputCreateAds = styled.input` 
	margin-top: 10px;
	border-radius: 5px;
	height: 30px;
`

const SelectCreateAds = styled.select`
	height: 30px;
	border-radius: 5px;
`

const ContainerImage = styled.div ` 
	width: 50%;
	display: flex;
	margin-right: 10%;
	align-items: center;

`

const ImageCreateAds = styled.img` 
	height: 70%;
	object-fit: cover;
`



export default class CreateAds extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nameProduct: "",
			descriptionProduct: "",
			priceProduct: -Infinity,
			paymentMetProduct: "",
			categoryProduct: "",
			photosProduct: [""],
			installmentsProduct: undefined
		}
	}

	changePhoto = () => {
				const arrayString = JSON.stringify(this.state.photosProduct)
				if (arrayString === '[""]') {
					return <ImageCreateAds src={AdImage}></ImageCreateAds>
				} else {
					if (arrayString.includes("jpg") ||
					arrayString.includes("png") ||
					arrayString.includes("jpeg")
					) {
						return <ImageCreateAds src={this.state.photosProduct}></ImageCreateAds>
					} else {
						return <ImageCreateAds src={AdImage}></ImageCreateAds>
					}
				}
			}


	//All onChanges

	onChangeInputName = (event) => {
		this.setState({ nameProduct: event.target.value })
	}

	onChangeInputDescription = (event) => {
		this.setState({ descriptionProduct: event.target.value })
	}

	onChangeInputPrice = (event) => {
		this.setState({ priceProduct: Number(event.target.value) })
	}

	onChangeInputPayMethod = (event) => {
		this.setState({ paymentMetProduct: event.target.value })
	}

	onChangeInputCategory = (event) => {
		this.setState({ categoryProduct: event.target.value })
	}

	onChangeInputPhoto = (event) => {
		this.setState({ photosProduct: [event.target.value] })
	}

	onChangeInputInstallments = (event) => {
		this.setState({ installmentsProduct: Number(event.target.value) })
	}

	//API Create Product

	createProduct = () => {
		const body = {
			name: this.state.nameProduct,
			description: this.state.descriptionProduct,
			price: this.state.priceProduct,
			paymentMethod: this.state.paymentMetProduct,
			category: this.state.categoryProduct,
			photos: this.state.photosProduct,
			installments: this.state.installmentsProduct
		}


		axios
			.post(
				"https://us-central1-future-apis.cloudfunctions.net/fourUsed/products",
				body
			).then(response => {
				console.log("Procuct created")
			}).catch(err => {
				console.log(err.message)
			})

		this.setState({
			nameProduct: "",
			descriptionProduct: "",
			priceProduct: -Infinity,
			paymentMetProduct: "",
			categoryProduct: "",
			photosProduct: [""],
			installmentsProduct: undefined
		})
	}



	render() {

		return <ContainerCreateAds>
			<h1>Crie seu anúncio </h1>
			<ContainerMain>
				<ContainerForm>
					<DataContainer>
						<label>O que você quer vender?  </label>
						<InputCreateAds
							onChange={this.onChangeInputName}
							value={this.state.nameProduct}
							placeholder="Título do item"
						></InputCreateAds>
					</DataContainer>
					<DataContainer>
						<label>A foto faz TODA diferença! Adiciona ela: </label>
						<InputCreateAds
							onChange={this.onChangeInputPhoto}
							value={this.state.photosProduct}
							placeholder="Coloque a URL da imagem"
						>
						</InputCreateAds>
					</DataContainer>
					<DataContainer>
						<label>Descrição caprichada do produto: </label>
						<InputCreateAds
							onChange={this.onChangeInputDescription}
							value={this.state.descriptionProduct}
							placeholder="Decrição"
						></InputCreateAds>
					</DataContainer>
					<DataContainer>
						<label>Qual a categoria do seu desapego? </label>
						<SelectCreateAds
							onChange={this.onChangeInputCategory}
							value={this.state.categoryProduct}
						>
							<option value="teste">Teste</option>
							<option value=""></option>
						</SelectCreateAds>
					</DataContainer>
					<DataContainer>
						<label>Qual o preço do seu produto? </label>
						<InputCreateAds
							onChange={this.onChangeInputPrice}
							value={this.state.priceProduct}
							placeholder="R$"
							type="number"
							min="0"
						></InputCreateAds>
					</DataContainer>
					<DataContainer>
						<label>Escolha a opção de pagamento: </label>
						<SelectCreateAds
							onChange={this.onChangeInputPayMethod}
							value={this.state.paymentMetProduct}
						>
							<option value="debit">Boleto bancário</option>
							<option value="card">Cartão de Crédito</option>
						</SelectCreateAds>
					</DataContainer>
					<DataContainer bottom={'50px'}>
						<label>Quantidade de parcelas: </label>
						<SelectCreateAds
							onChange={this.onChangeInputInstallments}
							value={this.state.installmentsProduct}
						>
							<option value="1">x 1</option>
							<option value="2">x 2</option>
							<option value="5">x 5</option>
							<option value="10">x 10</option>
						</SelectCreateAds>
					</DataContainer>
					<Button size="medium" color="secondary" variant="contained" onClick={this.createProduct}>Criar anúncio</Button>
				</ContainerForm>
				<ContainerImage>
					{this.changePhoto()}
				</ContainerImage>
			</ContainerMain>
		</ContainerCreateAds>
	}
}