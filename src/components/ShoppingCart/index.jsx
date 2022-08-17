import apiMock from "../ShoppingCart/Api/ApiMock.json";
import ShoppingCartAddress from "./Address/shoppingCartAddress";
import ShoppingCartProducts from "./Products/shoppingCartProducts";

import {
  CardShopping,
  Title,
  Table,
  Section,
  SubTitle,
  Button,
} from "./styles";

export default function ShoppingCart() {
  return (
    <CardShopping>
      <Title>Sua sacola de compras</Title>

      <ShoppingCartProducts />
      <ShoppingCartAddress />

      <Section>
        <SubTitle>Total</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th width="200px">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produtos</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(0)}
              </td>
            </tr>
            <tr>
              <td>Frete</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(apiMock.freightRate)}
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <div>
        <SubTitle>Finalizar compra</SubTitle>
        <Button className="buttonPrimary">Confirmar compra</Button>
      </div>
    </CardShopping>
  );
}
