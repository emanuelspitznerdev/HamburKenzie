import React from 'react'
import { StyledDivCart, StyledDivList, StyledUl, Wrapper, StyledWrapper } from './DashBoardCart'
import CartProduct from './CartProduct/CartProduct.jsx'
import CartTotal from './CartTotal/CartTotal.jsx'

const DashBoardCart = ({cartList, removeFromCartList, setCartList, removeAllFromCartList}) => {
  return (
    <StyledWrapper>
        <StyledDivCart>
            <p>
                Carrinho de Compras
            </p>
        </StyledDivCart>
        <StyledDivList>
            {cartList.length == 0 ? (
              <>
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
              </>
            ) : (
              <Wrapper>
                <StyledUl>
                  {cartList.map(product => (
                    <CartProduct key={product.id} product={product} removeFromCartList={removeFromCartList}/>
                  ))}
                </StyledUl>
                <CartTotal cartList={cartList} setCartList={setCartList} removeAllFromCartList={removeAllFromCartList}/>
              </Wrapper>
            )}
            
        </StyledDivList>
    </StyledWrapper>
  )
}

export default DashBoardCart