import {Section, SubTitle, Button} from '../styles'
import apiMock from '../Api/ApiMock.json'

export default function ShoppingCartAddress() {
  return (
    <Section>
      <SubTitle>Seu endereço de entrega</SubTitle>
      <p>
        {apiMock.customer.streetName}, {apiMock.customer.streetNumber},{" "}
        {apiMock.customer.neighboorhood}, {apiMock.customer.city} -{" "}
        {apiMock.customer.state}
      </p>
      <Button>Alterar endereço de entrega</Button>
    </Section>
  );
}
