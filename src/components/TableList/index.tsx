import { TableStyle } from './styles'

type Props = {
  headersArray: string[]
  children: React.ReactNode
}

export function TableList({ headersArray, children }: Props) {
  return (
    <TableStyle>
      <tr className="tableItemsHeaders">
        {headersArray.map((headers, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <th key={index}>{headers}</th>
        ))}
      </tr>
      {children}
    </TableStyle>
  )
}
