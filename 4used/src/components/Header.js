import React from 'react'
import styled from 'styled-components'
import logo from "../img/logo1.png"
import logoText from "../img/logo2.png"

const HeaderContainer = styled.header` 
	background-color: #9E9E9E;
	display: grid;
	grid-template-columns: 45% 55%;
	padding: 30px;
`
const ContainerImg = styled.div` 
	display: flex;
`

const LogoImage = styled.img` 
	height: 60px;
	align-self: center;
	margin-left: 20%;
`
const LogoImageText = styled.img` 
	height: 80px;
	justify-self: center;
	align-self: center;
	margin-right: ;
`

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <HeaderContainer>
			<ContainerImg>
				<LogoImage src={logo}></LogoImage>
			</ContainerImg>
			<ContainerImg>
				<LogoImageText src={logoText}></LogoImageText>
			</ContainerImg>
		</HeaderContainer>
	}
}

export default Header