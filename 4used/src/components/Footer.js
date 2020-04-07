import React from 'react'
import styled from 'styled-components'
import GitHub from "../img/github.png"


const FotterContainer = styled.footer` 
	background-color: #585753;
	padding: 40px;
	display: flex;
	justify-content: center;
`
const ImageGit = styled.img` 
	height: 50px;
`

class Footer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <FotterContainer>
			<a href="https://github.com/future4code/hamilton-4used">
				<ImageGit src={GitHub}></ImageGit>
			</a>
		</FotterContainer>
	}
}

export default Footer