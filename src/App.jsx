import { useState,useReducer } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Navbar from './Pages/Navbar';

import {initialState,CartReducer} from './CartReducer';
const produits=[{
        id: 1,
        nom: "produit cosmétique1",
        prix: 12,
        image:"https://lascom.com/wp-content/uploads/2021/03/Bland_Cosmetic_Product_Packaging_Unit_500x400.jpg",
        category: "cosmitique"
       },
       {
        id: 2,
        nom: "produit cosmétique 2",
        prix: 12,
        image:"https://cdn.shopify.com/s/files/1/0627/5982/9759/files/produits_cologuqes_2048x2048.jpg?v=1718725641%22",
        category: "cosmitique"
       },
       {
        id: 3,
        nom: "Agroalimentaire 1",
        prix: 12,
        image:"https://fnh.ma//uploads/actualites/5e7c9f4999398.png",
        category: "Agroalimentaire"
       },
       {
        id: 4,
        nom: "Agroalimentaire 2",
        prix: 12,
        image:"https://www.lodj.ma/photo/art/grande/96230214-67132187.jpg?v=1777035965",
        category: "Agroalimentaire"
       }];
function App() {

   const [state,dispatch]=useReducer(CartReducer,initialState);
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" element={<ProductList dispatch={dispatch} produits={produits}/>}/>
           <Route path="/products" element={<ProductList dispatch={dispatch} produits={produits}/>}/> 
           <Route path="/cart" element={<Cart dispatch={dispatch} productsCart={state.cart}/>}/>  
        </Routes>   
      </BrowserRouter> 
      
  )
}

export default App
