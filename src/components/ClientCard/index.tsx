import { Link } from 'react-router-dom'
import { UserProfile } from '../../assets/icons/UserProfile'
import { ClientCardStyle } from './styles'
import { Title } from '../Title/styles'
import { ChevronRight } from '../../assets/icons/chevron right'
import { color } from '../../theme'

type Props = {
  id: number
  clientName: string
  products: {
    nome: string
    proximaCompra: string
  }[]
}

export function ClientCard({ id, clientName, products }: Props) {
  return (
    <div>
      <ClientCardStyle>
        <Link to={`/predicao/${id}`}>
          <div className="ClientCardHeader">
            <div className="HeaderItems">
              <UserProfile color={color.tablePurple} />
              <div>
                <Title color={color.black} fontSize={16}>
                  {clientName}
                </Title>
              </div>
            </div>
            <ChevronRight />
          </div>
        </Link>
        <div className="tableContainer">
          <table>
            <tr className="titles">
              <th>Produto</th>
              <th>Próx. Compra</th>
            </tr>
            {products.map(item => (
              <tr>
                <td>{item.nome}</td>
                <td>{item.proximaCompra.split('-').reverse().join('/')}</td>
              </tr>
            ))}
          </table>
        </div>
      </ClientCardStyle>
    </div>
  )
}
