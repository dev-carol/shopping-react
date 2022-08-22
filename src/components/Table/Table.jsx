import { Table } from "../ShoppingCart/styles";

export function TableContainer({ headers, data, renderItem, footers }) {
  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th index={index}> {header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header, headerIndex) => (
              <td key={headerIndex}>{renderItem(item, header.key, index)}</td>
            ))}
          </tr>
        ))}
        {footers && (
          <tfoot>
            {footers.map((footer, index) => (
              <tr key={index}>
                <th>{footer.label}</th>
                <th>{footer.value}</th>
              </tr>
            ))}
          </tfoot>
        )}
      </tbody>
    </Table>
  );
}
