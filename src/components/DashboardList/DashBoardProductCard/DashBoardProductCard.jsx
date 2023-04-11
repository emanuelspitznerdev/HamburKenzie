import React from 'react'
import { StyledDivImg, StyledImg, StyledLi } from './DashBoardProductCard'

const DashBoardProductCard = ({product, addToCartList}) => { 
    return (
    <StyledLi>
        <StyledDivImg>
            <StyledImg src={product.img} alt="burg"/>
        </StyledDivImg>
        <h2>
            {product.name}
        </h2>
        <span>
            {product.category}
        </span>
        <p>
            R$ {product.price.toFixed(2)}
        </p>
        <button onClick={() => addToCartList(product)}>
            Adicionar
        </button>
    </StyledLi>
  )
}

export default DashBoardProductCard