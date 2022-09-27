import { SearchIcon } from '../../assets/icons/search'
import { SearchInputStyle } from './styles'

export function SearchInput() {
  return (
    <SearchInputStyle>
      <input placeholder="Pesquise uma palavra-chave" />
      <span className="searchIcon">
        <SearchIcon />
      </span>
    </SearchInputStyle>
  )
}
