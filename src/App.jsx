import { useEffect, useState } from 'react'
import { StyledDiv, StyledWrapper } from './App'
import DashBoardCart from './components/DashBoardCart/DashBoardCart.jsx'
import DashBoardHeader from './components/DashBoardHeader/DashBoardHeader.jsx'
import DashBoardList from './components/DashboardList/DashBoardList.jsx'
import { api } from './services/api'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [search, setSearch] = useState("");
  const searchProduct = productList.filter((product) => {
    return search === "" ? true : (product.name.toLowerCase()).includes(search)
  })

  useEffect(() => {
    async function loadProducts(){
      try {
        const response = await api.get('/products');
        setProductList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    loadProducts()
  }, [])
  
  function addToCartList (product){
    const newProduct = {...product, id: uuidv4()};
    setCartList([...cartList, newProduct]);
    toast.success('Produto adicionado com sucesso.');
  }

  function removeFromCartList (productId) {
    const newProductList = cartList.filter(product => product.id !== productId);
    setCartList(newProductList);
    toast.success('Produto removido com sucesso.');
  }

  function removeAllFromCartList () {
    setCartList([]);
    toast.success('Protudos removidos com sucesso.')
  }

  return (
    <>
    <StyledDiv>
      <DashBoardHeader setSearch={setSearch}/>
      <StyledWrapper>
        <DashBoardList productList={productList} addToCartList={addToCartList} searchProduct={searchProduct}/>
        <DashBoardCart cartList={cartList} removeFromCartList={removeFromCartList} setCartList={setCartList} removeAllFromCartList={removeAllFromCartList}/>
      </StyledWrapper>
    </StyledDiv>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  )
}

export default App
