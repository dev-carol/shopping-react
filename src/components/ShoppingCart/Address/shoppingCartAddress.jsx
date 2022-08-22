
import { Button } from "../../Button";
import { Section, SubTitle } from "../styles";

export default function ShoppingCartAddress({ customer }) {
  return (
    <Section>
      <SubTitle>Seu endereço de entrega</SubTitle>
      <p>
        {customer.streetName}, {customer.streetNumber}, {customer.neighboorhood}
        , {customer.city} - {customer.state}
      </p>
      <Button style={{background:'green'}}>Alterar endereço de entrega</Button>
    </Section>
  );
}
