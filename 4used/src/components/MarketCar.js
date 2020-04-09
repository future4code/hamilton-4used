import React from "react";
import styled from "styled-components";

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
`;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: ${(props) => (props.isCartOpen ? 0 : "-400px")};
  width: 400px;
  height: 100vh;
  background-color: white;
  transition: 0.5s;
`;

const DivProductMarketCar = styled.div`
	img{
		height:40px;
	}
`

export default class MarketCar extends React.Component {


	renderMarketCarProducts=()=>{
		const selectedProducts = this.props.arrayCart.map(product=>{
			return (<DivProductMarketCar>
						<img src={product.photos}/>
						<p>{product.name}</p>
						<p>R${product.price}</p>
					</DivProductMarketCar>)
		})
		return selectedProducts;
	}

	totalPrice=()=>{
		let total = 0;
		const sumTotal = this.props.arrayCart.forEach(product => {
			return total = total + product.price
		});
		
		return(<div>
				<h4>Total</h4>
				<p>R$ {total}</p> 
				</div>)
	}



  render() {
    return (
      <>
        <Container isCartOpen={this.props.isCartOpen}>
			<h2>Carrinho</h2>
			{this.renderMarketCarProducts()}
			{this.totalPrice()}
        </Container>

        <Overlay
          onClick={this.props.toggleCart}
          isCartOpen={this.props.isCartOpen}
        />
      </>
    );
  }
}

