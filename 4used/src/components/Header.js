import React from 'react'
import styled from 'styled-components'
import logo from "../img/logo.png"

const HeaderContainer = styled.header` 
	background-color: #FDDA8A;
	padding: 20px 0;
`

const LogoImage = styled.img` 
	height: 80px;
	align-self: center;	
	margin-left: 10%;
`

class Header extends React.Component {
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
				<input placeholder="Busca" onChange={this.onChangeInputSearch}/>
				<button onClick={this.filterSearch}>Buscar</button>
			</HeaderContainer>
		)
	}
}

export default Header