import { Calendar } from '../../assets/icons/calendar'
import { SelectDaysStyle } from './styles'

export function SelectDays() {
  return (
    <SelectDaysStyle>
      <option>
        <Calendar /> Mostrar: <span className="timeSet">esse dia</span>
      </option>
      <option>
        <Calendar /> Mostrar: <span className="timeSet">essa semana</span>
      </option>
      <option>
        {' '}
        <Calendar />
        Mostrar: <span className="timeSet">esse mês</span>
      </option>
    </SelectDaysStyle>
  )
}
