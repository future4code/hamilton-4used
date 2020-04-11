import React from 'react'
import styled from 'styled-components'
import GitHub from "../img/github.png"


const FotterContainer = styled.footer` 
	background-color: #202020;
	padding: 40px;
	display: flex;
	justify-content: center;
`
const ImageGit = styled.img` 
	height: 50px;
`

export default function Footer(){

	return (<FotterContainer>
				<a href="https://github.com/future4code/hamilton-4used">
					<ImageGit src={GitHub}></ImageGit>
				</a>
			</FotterContainer>)
}
