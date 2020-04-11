import React from 'react'
import styled from 'styled-components'
import logo from "../img/logo.png"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const HeaderContainer = styled.header` 
	background-color: #FDDA8A;
	padding: 20px 0;
	display: flex; 
`
const LogoImage = styled.img` 
	height: 80px;
	align-self: center;	
	margin-left: 10%;
`
const ContainerInputSearch = styled.div `
	align-self: center;
	margin-left: 25%;
	display: flex;
	align-items: flex-end;
`
const InputSearch = styled(TextField)`
	margin-right: 15px;
`


export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			inputSearch:""
		}
	}

	onChangeInputSearch=(event)=>{
		this.setState({inputSearch: event.target.value});
	}

	filterSearch=()=>{
		if(this.state.inputSearch!==""){
			const arraySearch = this.props.arrayProducts.filter((product)=>{
				const productlowerCase = product.name.toLowerCase();
				const searchText = this.state.inputSearch.toLowerCase();

				return (productlowerCase.includes(searchText));
			})
				this.props.setSearchArray(arraySearch);
				this.props.setScreen("search");
		}
	}

	changeScreen=()=>{
		this.props.setScreen("home")
	}

	render() {
		return (
			<HeaderContainer>
				<LogoImage src={logo} onClick={this.changeScreen}></LogoImage>
				<ContainerInputSearch>
				<InputSearch onChange={this.onChangeInputSearch}
							 id="standard-helperText"
				             label="Buscar produto"
				             defaultValue=""/>
				<Button onClick={this.filterSearch} size="small" color="secondary"
						variant="contained">Buscar
				</Button>
				</ContainerInputSearch>
			</HeaderContainer>
		)
	}
}
