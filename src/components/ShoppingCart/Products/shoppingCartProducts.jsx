import { Section, SubTitle } from "../styles";

import ShoppingCartTable from "./ShoppinCartTable";

export default function ShoppingCartProducts({products, onDelete, onChangeQuantity}) {
  return (
    <Section>
      <SubTitle>Produtos</SubTitle>
      <ShoppingCartTable
        data={products}
        onDelete={onDelete}
        onChangeQuantity={onChangeQuantity}
      />
    </Section>
  );
}
