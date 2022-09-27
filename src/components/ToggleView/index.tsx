import { MouseEventHandler } from 'react'
import { ToggleViewStyle } from './styles'

type Props = {
  switchOnState: boolean
  setSwitchOnState: MouseEventHandler<HTMLButtonElement>
}

export function ToggleView({ switchOnState, setSwitchOnState }: Props) {
  return (
    <ToggleViewStyle switchOn={switchOnState}>
      <button className="up" type="button" onClick={setSwitchOnState}>
        Em alta
      </button>
      <button className="down" type="button" onClick={setSwitchOnState}>
        Em baixa
      </button>
    </ToggleViewStyle>
  )
}
