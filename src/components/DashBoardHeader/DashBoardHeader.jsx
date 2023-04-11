import React, { useState } from 'react'
import { StyledBtn, StyledHeader, StyledImage, StyledInput, StyledInputForm } from './DashBoardHeader'
import Logo from '/src/assets/BurguerKenzie.svg'

const DashBoardHeader = ({setSearch}) => {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  }

  return (
    <StyledHeader>
        <div>
            <StyledImage src={Logo} alt='KenzieBurguerLogo'/>
        </div>
        <StyledInputForm onSubmit={submit}>
            <StyledInput type="text" value={searchValue} placeholder='Digitar pesquisa' onChange={(event) => setSearchValue(event.target.value)}/>
            <StyledBtn>
                Pesquisar
            </StyledBtn>
        </StyledInputForm>
    </StyledHeader>
  )
}

export default DashBoardHeader