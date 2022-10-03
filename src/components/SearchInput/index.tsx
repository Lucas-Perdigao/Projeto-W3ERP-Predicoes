import { Dispatch, SetStateAction } from 'react'
import { SearchIcon } from '../../assets/icons/search'
import { SearchInputStyle } from './styles'

type Props = {
  searchParam: string
  setSearchParam: Dispatch<SetStateAction<string>>
  onClick: () => void
}

export function SearchInput({ searchParam, setSearchParam, onClick }: Props) {
  return (
    <SearchInputStyle>
      <input
        placeholder="Pesquise uma palavra-chave"
        value={searchParam}
        onChange={event => setSearchParam(event.target.value)}
      />
      <button type="button" className="searchIcon" onClick={onClick}>
        <SearchIcon />
      </button>
    </SearchInputStyle>
  )
}
