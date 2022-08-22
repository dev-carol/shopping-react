import { TableContainer } from "../../Table";
import styles from './styles.module.css';
import { Section } from "../../ShoppingCart/styles";
import { Button } from "../../Button";

export default function ShoppingCartTable({ data, onDelete, onChangeQuantity }) {

  function handleRenderItem(item, key, index){
    switch(key){
      case 'unitPrice':
        return Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(item.unitPrice)

        case 'price':
          return Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(item.unitPrice * item.quantity)

          case 'delete':
            return <Button variant='deleteSmallButton' onClick={() => onDelete(index)}>X</Button>

            case 'quantity':
              return <div>
                <Button variant='smallButtonAction' onClick={() => onChangeQuantity(index,item.quantity - 1)}>-</Button>
                <span className={styles.quantityText}>{item.quantity}</span>
                <Button variant='smallButtonAction' onClick={() => onChangeQuantity(index, item.quantity + 1)}>+</Button>
              </div>

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
          { key: 'delete' ,label: "" },
        ]}
        data={data}
        renderItem={handleRenderItem}
      />
    </Section>
  );
}
