import { Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Calendar } from '../../assets/icons/calendar'
import { dateHelper } from '../../utils'
import { SelectDaysStyle } from './styles'

type Props = {
  setDate: Dispatch<SetStateAction<{ start: string; end: string }>>
}

export function SelectDays({ setDate }: Props) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget
    if (value === '0') {
      setDate(dateHelper.thisMonth())
      return
    }
    setDate(dateHelper.lastDays(Number(value)))
  }

  return (
    <div>
      <Calendar />
      <SelectDaysStyle onChange={handleChange}>
        <option value="0">
          Mostrar: <span className="timeSet">esse mês</span>
        </option>
        <option value="30">
          Mostrar: <span className="timeSet">últimos 30 dias</span>
        </option>
        <option value="60">
          Mostrar: <span className="timeSet">últimos 60 dias</span>
        </option>
        <option value="90">
          Mostrar: <span className="timeSet">últimos 90 dias</span>
        </option>
        <option value="120">
          Mostrar: <span className="timeSet">últimos 120 dias</span>
        </option>
      </SelectDaysStyle>
    </div>
  )
}
