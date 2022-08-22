import { useState } from "react";
import { CardShopping, Title } from "./styles";
import apiMock from "../ShoppingCart/Api/ApiMock.json";

import ShoppingCartAddress from "./Address/shoppingCartAddress";
import ShoppingCartConfirm from "./Confirm/shoppingCartConfirm";
import ShoppingCartProducts from "./Products/shoppingCartProducts";
import ShoppingCartTotal from "./Total/shoppingCartTotal";

export default function ShoppingCart() {
  const [products, setProducts] = useState (apiMock.products)

  function handleOnChangeQuantityProduct(index,newQuantity){
    setProducts((prev) => {
      const copy = [...prev];
      if(newQuantity > 0 ){
        copy[index].quantity = newQuantity;
      }
      return copy
    })
  }
  function handleOnDeleteProduct(index){
    setProducts((prev) => {
      const copy = [...prev];
      copy.splice(index, 1)
      return copy
    })

  }
  const productsTotalPrice = products.reduce((total, product) => (total += product.quantity * product.unitPrice),0 );

  return (
    <CardShopping>
      <Title>Sua sacola de compras</Title>

      <ShoppingCartProducts
      products={products}
      onChangeQuantity={handleOnChangeQuantityProduct}
      onDelete={handleOnDeleteProduct} />
      <ShoppingCartAddress customer={apiMock.customer} />

      <ShoppingCartTotal
        productsTotalPrice={productsTotalPrice}
        freightRate={apiMock.freightRate}
      />
      <ShoppingCartConfirm
       />
    </CardShopping>
  );
}
