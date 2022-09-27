import { SelectDays } from '../SelectDays'
import { MainHeaderStyle } from './styles'

type Props = {
  title: string
  children: React.ReactNode
}

export function MainHeader({ children, title }: Props) {
  return (
    <MainHeaderStyle>
      <div className="upperDiv">
        <p>{title}</p>
        <SelectDays />
      </div>
      <div className="cards">{children}</div>
    </MainHeaderStyle>
  )
}
