import { Section } from "../styles";
import { TableContainer } from "../Table/Table";

export default function ShoppingCartTable({ data }) {

  function handleRenderItem(item, key){
    switch(key){
      case 'unitPrice':
        return Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(item.unitPrice)
        default:
          return item[key]
    }
  }
  return (
    <Section>
      <TableContainer
        headers={[
          { key: 'name', label: "Produto" },
          { key: 'quantity', label: "Quantidade" },
          { key: 'unitPrice' , label: "Preço Unitário" },
          { key: 'price' ,label: "Preço Total" },
        ]}
        data={data}
        renderItem={handleRenderItem}
      />
    </Section>
  );
}
