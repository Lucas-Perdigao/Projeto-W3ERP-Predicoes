import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MainContainer } from '../components/MainContainer/styles'
import { MainHeader } from '../components/MainHeader'
import { NumberCard } from '../components/NumberCard'
import { TableContainer } from '../components/TableContainer/styles'
import { TableCard } from '../components/TableCard'
import { ChevronRight } from '../assets/icons/chevron right'
import { getProducts } from '../services/dashboard/getProducts'
import { getClients } from '../services/dashboard/getClients'
import { getNumberCard } from '../services/dashboard/getNumberCard'
import { ProductClientArray } from '../types/types'

// type CardsType = {
//   variant: 'up' | 'down' | 'average' | 'lastDays'
//   tagPercentage?: number
//   productNumber: number
//   radialPercentage?: number
//   days?: number
//   type: string
// }

// const cards: CardsType[] = [
//   {
//     variant: 'up',
//     tagPercentage: 20,
//     productNumber: 60,
//     radialPercentage: 54,
//   },
//   {
//     variant: 'down',
//     tagPercentage: 40,
//     productNumber: 140,
//     radialPercentage: 35,
//   },
//   {
//     variant: 'up',
//     tagPercentage: 80,
//     productNumber: 45,
//     radialPercentage: 78,
//   },
//   {
//     variant: 'down',
//     tagPercentage: 37,
//     productNumber: 78,
//     radialPercentage: 92,
//   },
// ]

const titleProductsTable = ['ID', 'Produto', 'Percentual', '']
const titleClientsTable = ['ID', 'Clientes', 'Percentual', '']

// const productItems = [
//   {
//     id: 1,
//     product: 'Papel higiênico',
//     percentage: 72,
//   },
//   {
//     id: 2,
//     product: 'Álcool em gel',
//     percentage: 68,
//   },
//   {
//     id: 3,
//     product: 'Sabonete',
//     percentage: 64,
//   },
//   {
//     id: 4,
//     product: 'Detergente',
//     percentage: 56,
//   },
//   {
//     id: 5,
//     product: 'Água sanitária',
//     percentage: 52,
//   },
//   {
//     id: 6,
//     product: 'Limpador Multiuso',
//     percentage: 45,
//   },
//   {
//     id: 7,
//     product: 'Perfume',
//     percentage: 40,
//   },
//   {
//     id: 8,
//     product: 'Cloro',
//     percentage: 32,
//   },
//   {
//     id: 9,
//     product: 'Limpa piso',
//     percentage: 26,
//   },
//   {
//     id: 10,
//     product: 'Alvejante',
//     percentage: 20,
//   },
// ]

// const clientItems = [
//   {
//     id: 1,
//     product: 'Hotel Íbis',
//     percentage: 72,
//   },
//   {
//     id: 2,
//     product: 'Restaurante Carretão',
//     percentage: 68,
//   },
//   {
//     id: 3,
//     product: 'Nobile Hotel',
//     percentage: 64,
//   },
//   {
//     id: 4,
//     product: "Mc Donald's",
//     percentage: 56,
//   },
//   {
//     id: 5,
//     product: 'Academia Smart Fit',
//     percentage: 52,
//   },
//   {
//     id: 6,
//     product: 'iZap Softworks',
//     percentage: 45,
//   },
//   {
//     id: 7,
//     product: 'Vida Plena Academia',
//     percentage: 40,
//   },
//   {
//     id: 8,
//     product: 'Hermes Pardini',
//     percentage: 32,
//   },
//   {
//     id: 9,
//     product: 'Hospital Santa Rita',
//     percentage: 26,
//   },
//   {
//     id: 10,
//     product: 'Restaurante Comida da Roça',
//     percentage: 20,
//   },
// ]

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
      const result = await getProducts()
      if (result.message) {
        alert(result.message)
      } else {
        setProducts(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (clienteEmAlta === true) {
        const result = await getClients('EM_ALTA')
        if (result.message) {
          alert(result.message)
        } else {
          setClients(result)
        }
      } else {
        const result = await getClients('EM_BAIXA')
        if (result.message) {
          alert(result.message)
        } else {
          setClients(result)
        }
      }
    })()
  }, [])

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
          toogle
          stateToogle={clienteEmAlta}
          setStateToogle={setClienteEmAlta}
        >
          {products.map((item, index) => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/produto/${item.id}`)}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
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
          toogle
          stateToogle={clienteEmAlta}
          setStateToogle={setClienteEmAlta}
        >
          {clients.map((item, index) => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/cliente/${item.id}`)}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
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
