import React from 'react'
import { StyledUl } from './DashBoardList.js'
import DashBoardProductCard from './DashBoardProductCard/DashBoardProductCard.jsx'

const DashBoardList = ({productList, addToCartList, searchProduct}) => {
  

    return (
    <StyledUl>
        {searchProduct.map(product => (
          <DashBoardProductCard key={product.id} product={product} addToCartList={addToCartList}/>
        ))}
    </StyledUl>
  )
}

export default DashBoardList