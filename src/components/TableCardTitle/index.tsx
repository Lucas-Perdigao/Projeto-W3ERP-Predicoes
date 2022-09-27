import { color } from '../../theme/index'
import { Title } from '../Title/styles'
import { TableCardTitleStyle } from './styles'
import { FacialCleanser } from '../../assets/icons/facial-cleanser'
import { EveryUser } from '../../assets/icons/Every-user'
import { TredingDown } from '../../assets/icons/trending-down'
import { TrendingUp } from '../../assets/icons/trending-up'
import { History } from '../../assets/icons/history'

type Props = {
  variant:
    | 'products'
    | 'clients'
    | 'history'
    | 'runningOut'
    | 'clientsUp'
    | 'clientsDown'
    | 'productsUp'
    | 'productsDown'
}

export function TableCardTitle({ variant }: Props) {
  return (
    <TableCardTitleStyle variant={variant}>
      <div className="iconDiv">
        {variant === 'products' && <FacialCleanser color={color.blue} />}
        {variant === 'clients' && <EveryUser />}
        {variant === 'history' && <History />}
        {variant === 'runningOut' && <FacialCleanser color={color.warning} />}
        {variant === 'clientsDown' && <TredingDown />}
        {variant === 'clientsUp' && <TrendingUp />}
        {variant === 'productsDown' && <TredingDown />}
        {variant === 'productsUp' && <TrendingUp />}
      </div>
      <div className="titleDiv">
        {variant === 'products' && <Title fontSize={20}>Produtos</Title>}
        {variant === 'clients' && <Title fontSize={20}>Clientes</Title>}
        {variant === 'history' && <Title fontSize={20}>Histórico</Title>}
        {variant === 'runningOut' && (
          <Title fontSize={20}>Produtos esgotando</Title>
        )}
        {variant === 'clientsDown' && (
          <Title fontSize={20}>Clientes em baixa</Title>
        )}
        {variant === 'clientsUp' && (
          <Title fontSize={20}>Clientes em alta</Title>
        )}
        {variant === 'productsDown' && (
          <Title fontSize={20}>Produtos em baixa</Title>
        )}
        {variant === 'productsUp' && (
          <Title fontSize={20}>Produtos em alta</Title>
        )}
      </div>
    </TableCardTitleStyle>
  )
}
