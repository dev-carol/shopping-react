import { Section, SubTitle } from "../styles";
import apiMock from "../Api/ApiMock.json";
import ShoppingCartTable from "./ShoppinCartTable";

export default function ShoppingCartProducts() {
  return (
    <Section>
      <SubTitle>Produtos</SubTitle>
      <ShoppingCartTable
        data={apiMock.products}
      />
    </Section>
  );
}
