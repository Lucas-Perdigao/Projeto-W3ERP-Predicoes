import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MainContainer } from '../components/MainContainer/styles'
import { MainHeader } from '../components/MainHeader'
import { NumberCard } from '../components/NumberCard'
import { TableContainer } from '../components/TableContainer/styles'
import { TableCard } from '../components/TableCard'
import { ChevronRight } from '../assets/icons/chevron right'
import { getDashboardProducts } from '../services/dashboard/getDashboardProducts'
import { getDashboardClients } from '../services/dashboard/getDashboardClients'
import { getNumberCard } from '../services/dashboard/getNumberCard'
import { ProductClientArray } from '../types/types'

const titleProductsTable = ['ID', 'Produto', 'Percentual', '']
const titleClientsTable = ['ID', 'Clientes', 'Percentual', '']

type NumberCardType = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}

export function Dashboard() {
  const [clienteEmAlta, setClienteEmAlta] = useState(true)
  const [produtosEmAlta, setProdutosEmAlta] = useState(true)
  const [products, setProducts] = useState<ProductClientArray>([])
  const [clients, setClients] = useState<ProductClientArray>([])
  const [numberCardInfo, setNumberCardInfo] = useState<NumberCardType>(
    {} as NumberCardType
  )
  const navigate = useNavigate()

  const goToPage = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    ;(async () => {
      if (clienteEmAlta === true) {
        const result = await getDashboardClients('EM_ALTA')
        if (result.message) {
          alert(result.message)
        } else {
          setClients(result)
        }
      } else {
        const result = await getDashboardClients('EM_BAIXA')
        if (result.message) {
          alert(result.message)
        } else {
          setClients(result)
        }
      }
    })()
  }, [clienteEmAlta])

  useEffect(() => {
    ;(async () => {
      if (produtosEmAlta === true) {
        const result = await getDashboardProducts('EM_ALTA')
        if (result.message) {
          alert(result.message)
        } else {
          setProducts(result)
        }
      } else {
        const result = await getDashboardProducts('EM_BAIXA')
        if (result.message) {
          alert(result.message)
        } else {
          setProducts(result)
        }
      }
    })()
  }, [produtosEmAlta])

  useEffect(() => {
    ;(async () => {
      const result = await getNumberCard()
      if (result.message) {
        alert(result.message)
      } else {
        setNumberCardInfo(result)
      }
    })()
  }, [])

  return (
    <MainContainer>
      <MainHeader title="Dashboard">
        <NumberCard
          variant="up"
          tagPercentage={numberCardInfo.percentualVariacaoProdutosAlta}
          productNumber={numberCardInfo.quantidadeProdutosAlta}
          radialPercentage={numberCardInfo.percentualTotalProdutosAlta}
          type="product"
        />
        <NumberCard
          variant="down"
          tagPercentage={numberCardInfo.percentualVariacaoProdutosBaixa}
          productNumber={numberCardInfo.quantidadeProdutosBaixa}
          radialPercentage={numberCardInfo.percentualTotalProdutosBaixa}
          type="product"
        />
        <NumberCard
          variant="up"
          tagPercentage={numberCardInfo.percentualVariacaoClientesAlta}
          productNumber={numberCardInfo.quantidadeClientesAlta}
          radialPercentage={numberCardInfo.percentualTotalClientesAlta}
          type="client"
        />
        <NumberCard
          variant="down"
          tagPercentage={numberCardInfo.percentualVariacaoClientesBaixa}
          productNumber={numberCardInfo.quantidadeClientesBaixa}
          radialPercentage={numberCardInfo.percentualTotalClientesBaixa}
          type="client"
        />
      </MainHeader>
      <TableContainer>
        <TableCard
          headers={titleProductsTable}
          title="products"
          stateToogle={produtosEmAlta}
          setStateToogle={setProdutosEmAlta}
        >
          {products.map(item => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.percentual}%</td>
              <td>
                <Link to={`/produto/${item.id}`}>
                  <ChevronRight />
                </Link>
              </td>
            </tr>
          ))}
        </TableCard>
        <TableCard
          headers={titleClientsTable}
          title="clients"
          stateToogle={clienteEmAlta}
          setStateToogle={setClienteEmAlta}
        >
          {clients.map(item => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/cliente/${item.id}`)}
              key={item.id}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.percentual}%</td>
              <td>
                <Link to={`/cliente/${item.id}`}>
                  <ChevronRight />
                </Link>
              </td>
            </tr>
          ))}{' '}
        </TableCard>
      </TableContainer>
    </MainContainer>
  )
}
