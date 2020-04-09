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

export default class MarketCar extends React.Component {
  render() {
    return (
      <>
        <Container isCartOpen={this.props.isCartOpen}>
          {this.props.arrayCart.map((product) => (
            <p>{product.name}</p>
          ))}
        </Container>
        <Overlay
          onClick={this.props.toggleCart}
          isCartOpen={this.props.isCartOpen}
        />
      </>
    );
  }
}

