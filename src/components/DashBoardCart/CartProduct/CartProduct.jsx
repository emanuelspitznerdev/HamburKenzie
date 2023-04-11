import React from 'react'
import { StyledLi, StyledDivImg, StyledImg, StyledDivDescription, StyledDivButton, StyledBtn } from './CartProduct.js'

const CartProduct = ({product, removeFromCartList}) => {
  return (
    <StyledLi>
        <StyledDivImg>
            <StyledImg src={product.img} alt='hamburguer' />
        </StyledDivImg>
        <StyledDivDescription>
            <h2>
                {product.name}
            </h2>
            <span>
                {product.category}
            </span>
        </StyledDivDescription>
        <StyledDivButton>
            <StyledBtn onClick={() => removeFromCartList(product.id)}>
                Remover
            </StyledBtn>
        </StyledDivButton>
    </StyledLi>
  )
}

export default CartProduct