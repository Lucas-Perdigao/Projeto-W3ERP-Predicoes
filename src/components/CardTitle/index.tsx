import { CardTitleStyle } from './styles'
import { CardTitleVariants } from './info'
import { CardTitleVariant } from '../../types/types'

type Props = {
  variant: CardTitleVariant
}

export function CardTitle({ variant }: Props) {
  return (
    <CardTitleStyle cardColor={CardTitleVariants[variant].color}>
      <div className="iconDiv">{CardTitleVariants[variant].icon}</div>
      <div className="titleDiv">{CardTitleVariants[variant].text}</div>
    </CardTitleStyle>
  )
}
