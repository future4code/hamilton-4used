import React from "react";
import styled from "styled-components";

import Fab from '@material-ui/core/Fab';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DeleteIcon from '@material-ui/icons/Delete';

const ContainerMarketCar = styled.div` 
`
const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: ${(props) => (props.isCartOpen ? 0 : "-400px")};
  width: 400px;
  height: 100vh;
  background-color: white;
  transition: 0.5s;
  padding-left: 30px;
  padding-right: 20px;
`
const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  color: #F04E3E;
`
const ContainerCartProducts = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  overflow-y: scroll;
`
const DivProductMarketCar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
	img{
		height:40px;
	}
`
const ContainerProduct = styled.div` 
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${
	  props => props.bottom
	};
  border-bottom: ${
    props => props.border
  };
`
const Price = styled.p `
  margin-left: 20px;
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: ${(props) => (props.isCartOpen ? 0.8 : 0)};
  pointer-events: ${(props) => (props.isCartOpen ? "auto" : "none")};
  transition: 0.5s;
`


export default class MarketCar extends React.Component {

  renderMarketCarProducts = () => {
    const selectedProducts = this.props.arrayCart.map((product,index) => {
      return (
        <DivProductMarketCar key={index}>
          <ContainerProduct>
            <img src={product.photos} alt="Ilustração do produto"/>
            <Fab size="small" color="primary" variant="fab"
							          onClick={()=>this.removeProductToCart(product.name)}> 
               	<DeleteIcon fontSize="small"/>
				    </Fab>
            </ContainerProduct>
            
            <ContainerProduct bottom={'20px'} border={'dotted'}>
              <p>{product.name}</p>
              <Price>R${product.price}</Price>
            </ContainerProduct>
        </DivProductMarketCar>
      )
    })
    return selectedProducts;
  }

  totalPrice = () => {
    let total = 0;
     this.props.arrayCart.forEach(product => {
      return total = (Number(total) + product.price).toFixed(2);
    });

    return (
            <div>
              <h4><strong>Total:</strong></h4>
              <p>R$ {total}</p>
            </div>
          )
  }  

  removeProductToCart=(value)=>{
    if(window.confirm("Tem certeza que deseja remover este produto do carrinho ?")){
      this.props.removeProductToCart(value);
    }
  }


  render() {
    return (
      <ContainerMarketCar>

        <Container isCartOpen={this.props.isCartOpen}>

          <ContainerTitle>
            <h2>Carrinho</h2>
            <ShoppingBasketIcon fontSize="large" />
          </ContainerTitle>

          <ContainerCartProducts>
            {this.renderMarketCarProducts()}
          </ContainerCartProducts>
          
          {this.totalPrice()}

        </Container>

        <Overlay
          onClick={this.props.toggleCart}
          isCartOpen={this.props.isCartOpen}/>

      </ContainerMarketCar>
    );
  }
}

