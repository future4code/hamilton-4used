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
	margin-left: 20%;
`

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <HeaderContainer>
				<LogoImage src={logo}></LogoImage>
		</HeaderContainer>
	}
}

export default Header