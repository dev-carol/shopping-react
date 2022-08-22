import { Button } from "../Button";
import apiMock from "../ShoppingCart/Api/ApiMock.json";
import ShoppingCartAddress from "./Address/shoppingCartAddress";
import ShoppingCartConfirm from "./Confirm/shoppingCartConfirm";
import ShoppingCartProducts from "./Products/shoppingCartProducts";

import { CardShopping, Title, SubTitle } from "./styles";
import ShoppingCartTotal from "./Total/shoppingCartTotal";

export default function ShoppingCart() {
  return (
    <CardShopping>
      <Title>Sua sacola de compras</Title>

      <ShoppingCartProducts />
      <ShoppingCartAddress customer={apiMock.customer} />

      <ShoppingCartTotal
        productsTotalPrice={0}
        freightRate={apiMock.freightRate}
      />
      <ShoppingCartConfirm />
    </CardShopping>
  );
}
