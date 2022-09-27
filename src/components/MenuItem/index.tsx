import { MenuItemStyle } from './styles'

type Props = {
  icon: JSX.Element
  text: string
  url: string
}

export function MenuItem({ icon, text, url }: Props) {
  return (
    <MenuItemStyle to={url}>
      <span>{icon}</span>
      <span>{text}</span>
    </MenuItemStyle>
  )
}
