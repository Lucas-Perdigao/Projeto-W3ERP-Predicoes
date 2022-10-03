import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmAltaBaixa } from '../components/EmAltaBaixa/styles'
import { FilterButton } from '../components/FilterButton'
import { MainContainer } from '../components/MainContainer/styles'
import { SearchInput } from '../components/SearchInput'
import { TableList } from '../components/TableList'
import { Title } from '../components/Title/styles'
import { getProducts } from '../services/produtos/getProducts'

type ProductsType = {
  classificacao: string
  id: number
  nome: string
  percentual: number
}[]

const productTableTitle = ['ID', 'Produto', 'Status', 'Percetual']

export function Produtos() {
  const [products, setProducts] = useState<ProductsType>([] as ProductsType)
  const [filterOn, setFilterOn] = useState<boolean>(false)
  const [stateFilter, setStateFilter] = useState<
    'TODOS' | 'EM_ALTA' | 'EM_BAIXA'
  >('TODOS')
  const [searchParam, setSearchParam] = useState('')
  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }

  const fetchProducts = async () => {
    const classificacao = stateFilter === 'TODOS' ? undefined : stateFilter
    const result = await getProducts(searchParam, classificacao)
    if (result.message) {
      alert(result.message)
    } else {
      setProducts(result)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <MainContainer>
      <Title fontSize={32}>Produtos</Title>
      <div className="whiteContainer">
        <div className="flex">
          <SearchInput
            searchParam={searchParam}
            setSearchParam={setSearchParam}
            onClick={fetchProducts}
          />{' '}
          <FilterButton
            openOrClosed={filterOn}
            button={setFilterOn}
            stateFilter={stateFilter}
            setStateFilter={setStateFilter}
            getFilter={fetchProducts}
          />
        </div>

        <TableList headersArray={productTableTitle}>
          {products.map(item => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
              style={{ cursor: 'pointer' }}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>
                {item.classificacao === 'EM_ALTA' ? (
                  <EmAltaBaixa variant="alta">Em alta</EmAltaBaixa>
                ) : (
                  <EmAltaBaixa variant="baixa">Em baixa</EmAltaBaixa>
                )}
              </td>
              <td>{item.percentual}%</td>
            </tr>
          ))}
        </TableList>
      </div>
    </MainContainer>
  )
}
