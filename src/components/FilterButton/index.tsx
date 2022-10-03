import { Dispatch, SetStateAction } from 'react'
import { Filter } from '../../assets/icons/filter'
import { Button } from '../Button'
import { FilterStyle } from './styles'

type Props = {
  openOrClosed: boolean
  button: Dispatch<SetStateAction<boolean>>
  stateFilter: 'TODOS' | 'EM_ALTA' | 'EM_BAIXA'
  setStateFilter: Dispatch<SetStateAction<'TODOS' | 'EM_ALTA' | 'EM_BAIXA'>>
  getFilter: () => void
}

export function FilterButton({
  openOrClosed,
  button,
  stateFilter,
  setStateFilter,
  getFilter,
}: Props) {
  return (
    <FilterStyle>
      <button type="button" onClick={() => button(!openOrClosed)}>
        <Filter />
      </button>
      {openOrClosed && (
        <div className="filterOptions">
          <p className="filterBy">Filtrar por:</p>
          <div>
            <p className="status">Status</p>
            <div className="filterItem">
              <input
                checked={stateFilter === 'TODOS'}
                onChange={() => setStateFilter('TODOS')}
                type="checkbox"
              />
              <p>Todos</p>
            </div>
            <div className="filterItem">
              <input
                checked={stateFilter === 'EM_ALTA'}
                onChange={() => setStateFilter('EM_ALTA')}
                type="checkbox"
              />
              <p>Em alta</p>
            </div>
            <div className="filterItem">
              <input
                checked={stateFilter === 'EM_BAIXA'}
                onChange={() => setStateFilter('EM_BAIXA')}
                type="checkbox"
              />
              <p>Em baixa</p>
            </div>
            <div className="buttonDiv">
              <Button
                variant="faleConosco"
                onClick={() => getFilter()}
                text="Aplicar"
              />
            </div>
          </div>
        </div>
      )}
    </FilterStyle>
  )
}
