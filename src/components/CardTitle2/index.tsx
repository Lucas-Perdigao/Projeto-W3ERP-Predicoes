import { CardTitleStyle } from './styles'

type Props = {
  icon: JSX.Element
  text: string
  backgroundColor: string
  textColor?: string
  round?: 'yes'
}

export function CardTitle2({
  icon,
  text,
  backgroundColor,
  textColor,
  round,
}: Props) {
  return (
    <CardTitleStyle
      backgroundColor={backgroundColor}
      textColor={textColor}
      round={round}
    >
      <div className="iconDiv">{icon}</div>
      <div className="titleDiv">{text}</div>
    </CardTitleStyle>
  )
}
