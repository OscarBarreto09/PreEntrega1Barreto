import React from 'react';
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/CartContext/CartContext';
import Error from './Error';
import { CheckOut } from './Components/CheckOut/CheckOut';


function App() {
  return (
      <div>
        <BrowserRouter>
        <CartProvider>

        <NavBar/>

        <Routes>
          <Route path={'/'} element={<ItemListContainer greeting={"OJ AutosPrime"}> </ItemListContainer>}></Route>
          <Route path={'/category/:id'} element={ <ItemListContainer/>}></Route>
          <Route path={'/item/:id'} element={ <ItemDetailContainer/>}></Route>
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"/checkout"} element={<CheckOut/>} />
          <Route path={'*'} element={ <Error/>}></Route>

        </Routes>
        </CartProvider>
        
        </BrowserRouter>
      </div>
  )
}

export default App
