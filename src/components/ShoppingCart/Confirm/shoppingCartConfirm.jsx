
import { Button } from "../../Button";
import { Section, SubTitle } from "../styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function handleConfirmBuy(){
  return toast.success("Compra confirmada!");
}
export default function ShoppingCartConfirm() {
  return (
    <Section>
      <SubTitle>Finalizar compra</SubTitle>
      <Button 
      variant="primary"
      onClick={handleConfirmBuy}
      >Confirmar compra</Button>
        <ToastContainer />
    </Section>
  );
}
