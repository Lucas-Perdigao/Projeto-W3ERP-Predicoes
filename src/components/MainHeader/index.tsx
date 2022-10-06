import { Dispatch, SetStateAction } from 'react'
import { SelectDays } from '../SelectDays'
import { MainHeaderStyle } from './styles'

type Props = {
  title: string
  children: React.ReactNode
  setDateParam: Dispatch<SetStateAction<{ start: string; end: string }>>
}

export function MainHeader({ children, title, setDateParam }: Props) {
  return (
    <MainHeaderStyle>
      <div className="upperDiv">
        <p>{title}</p>
        <SelectDays setDate={setDateParam} />
      </div>
      <div className="cards">{children}</div>
    </MainHeaderStyle>
  )
}
