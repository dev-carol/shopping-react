import { Table } from "../ShoppingCart/styles";

export function TableContainer({ headers, data, renderItem }) {
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
              <td key={headerIndex}>{renderItem(item, header.key)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
