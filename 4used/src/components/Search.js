import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const CardContent = styled.div`
display:flex;
flex-direction:column;

`

const Card = styled.div`
width:200px;


`

const Title = styled.h3`
text-align:center;
font-size: 1em;
color:#434347;


`
const PriceTag = styled.p`
color:#434347;
display:inline;
margin-left:1em;

`
const Img = styled.div`
`
const ItemImage = styled.img`
width: 150px;
justify-content:space-around;
 margin: 1vh;

`

const Box = styled.div`
border:1px  solid #434347;
box-shadow: 2px 2px 2px #434347 ;

`


const ContainerGrid = styled.div`
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(3, 1fr);
background-color: #fff;
color: #444;
/* grid-template-rows: repeat(3, 1fr); */

`

const DivButton = styled.div`
margin:2vh;


`
const DivDescricao = styled.div`
display:flex;

`


export default class Search extends React.Component {
	constructor(props) {
		super(props)
        this.state={}
    }

    renderProducts = () => {
        if(this.props.arrayProductsSearch.length === 0){
            return <h2>Não temos este produto em estoque</h2>

        }else{
            const searchProducts = this.props.arrayProductsSearch.map(product => {
                return (
                    <Box key={product.id}>
					<CardContent>
						<Title>{product.name} </Title>
						<DivDescricao>
							<ItemImage src={product.photos} alt={"imagem"} />
							<p>Descrição: {product.description}
							</p>
							<p> Preço: {product.price}
							</p>
						</DivDescricao>
						<DivButton>
							<Button size="medium" color="secondary" variant="contained"> Comprar</Button>
						</DivButton>
					</CardContent>
				</Box>)
		})
		return searchProducts;
        }
	}


    render() {
		return (
            <div>
                <ContainerGrid>
					{this.renderProducts()}
				</ContainerGrid>
            </div>

         )
    }
}
