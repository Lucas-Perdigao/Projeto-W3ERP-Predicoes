import { FacialCleanser } from '../../assets/icons/facial-cleanser'
import { CardTitleVariant } from '../../types/types'
import { color } from '../../theme'
import { EveryUser } from '../../assets/icons/Every-user'
import { TredingDown } from '../../assets/icons/trending-down'
import { TrendingUp } from '../../assets/icons/trending-up'
import { History } from '../../assets/icons/history'

type CardTitleInfo = Record<
  CardTitleVariant,
  {
    text: string
    icon: JSX.Element
    color: string
  }
>

export const CardTitleVariants: CardTitleInfo = {
  products: {
    text: 'Produtos',
    icon: <FacialCleanser color={color.blue} />,
    color: color.tablePurple,
  },
  clients: {
    text: 'Clientes',
    icon: <EveryUser />,
    color: color.blue,
  },
  history: {
    text: 'Histórico',
    icon: <History />,
    color: color.grey,
  },
  runningOut: {
    text: 'Produtos esgotando',
    icon: <FacialCleanser color={color.warning} />,
    color: color.lightRed,
  },
  clientsUp: {
    text: 'Clientes em alta',
    icon: <TrendingUp />,
    color: color.success,
  },
  clientsDown: {
    text: 'Clientes em baixa',
    icon: <TredingDown />,
    color: color.warning,
  },
  productsUp: {
    text: 'Produtos em alta',
    icon: <TrendingUp />,
    color: color.success,
  },
  productsDown: {
    text: 'Produtos em baixa',
    icon: <TredingDown />,
    color: color.warning,
  },
}
