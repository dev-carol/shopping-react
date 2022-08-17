function App() {
  return (
    <div>
      <h1>Sua sacola de compras</h1>
      <div>
        <h2>Produtos</h2>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Preço Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>1</td>
              <td>R$1,00</td>
              <td>R$1,00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Seu endreço de entrega</h2>
        <p>Rua qualquer, 123 Centro - SP</p>
        <button>Alterar endereço de entrega</button>
      </div>

      <div>
        <h2>Total</h2>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Produtos</td>
              <td>R$3,00</td>
            </tr>
            <tr>
              <td>Frete</td>
              <td>R$1,00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Finalizar compra</h2>
        <button>Confirmar compra</button>
      </div>

    </div>
  );
}

export default App;
