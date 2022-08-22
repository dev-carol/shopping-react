import { TableContainer } from "../../Table";
import { Section, SubTitle } from "../styles";

export default function ShoppingCartTotal({
  freightRate = 0,
  productsTotalPrice = 0,
}) {
  function handleRenderItem(item, key) {
    switch (key) {
      case "subTotal":
        return Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(item.subTotal);

      default:
        return item[key];
    }
  }
  return (
    <Section>
      <SubTitle>Total</SubTitle>
      <TableContainer
        data={[
          {
            description: "Produtos",
            subTotal: productsTotalPrice,
          },
          {
            description: "Frete",
            subTotal: freightRate,
          },
        ]}
        headers={[
          {
            key: "description",
            label: "Descrição",
          },
          {
            key: "subTotal",
            label: "Preço",
          },
        ]}
        footers={[
          {
            label: "Resultado Final: ",
            value: Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(productsTotalPrice + freightRate),
          },
        ]}
        renderItem={handleRenderItem}
      />
    </Section>
  );
}
