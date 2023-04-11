import React, { useState } from 'react'
import { StyledTotalDiv, StyledButton } from './CartTotal';

const CartTotal = ({cartList, setCartList, removeAllFromCartList}) => {
    const [total, setTotal] = useState(0);
    const cartTotal = cartList.map((product) => {
        return product.price
    })
    const init = 0;
    const totalValue = cartTotal.reduce((acc, currentVal) => acc + currentVal, init);
    console.log(totalValue)

    return (
    <>
    <StyledTotalDiv>
        <h2 class='h2-dashboard'>
            Total
        </h2>
        <span>
            R$ {totalValue.toFixed(2)}
        </span>
    </StyledTotalDiv>
    <StyledButton onClick={() => removeAllFromCartList()}>
        Remover todos
    </StyledButton>
    </>
  )
}

export default CartTotal