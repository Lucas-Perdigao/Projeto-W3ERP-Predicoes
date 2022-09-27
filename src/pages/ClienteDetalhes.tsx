import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from '../assets/icons/chevron left'
import { CardTitle2 } from '../components/CardTitle2'
import { MainContainer } from '../components/MainContainer/styles'
import { NumberCard } from '../components/NumberCard'
import { TableCard } from '../components/TableCard'
import { TableContainer } from '../components/TableContainer/styles'
import { Title } from '../components/Title/styles'
import { getClientsSummary } from '../services/clientes/getClientsSummary'
import { getProductsFromClient } from '../services/clientes/getProductsfromClient'
import { color } from '../theme'

type ProdutoSummaryType = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}

type ClientsFromProductType = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}[]

const clientTableTitle = ['ID', 'Cliente', 'Percentual', 'Qtd']

export function ClienteDetalhes() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [clientsSummary, setClientsSummary] = useState<ProdutoSummaryType>(
    {} as ProdutoSummaryType
  )
  const [productsUp, setProductsUp] = useState<ClientsFromProductType>(
    [] as ClientsFromProductType
  )
  const [productsDown, setProductsDown] = useState<ClientsFromProductType>(
    [] as ClientsFromProductType
  )

  const goToPage = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    ;(async () => {
      const result = await getClientsSummary(id!)
      if (result.message) {
        alert(result.message)
      } else {
        setClientsSummary(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const result = await getProductsFromClient(id!, 'EM_ALTA')
      if (result.message) {
        alert(result.message)
      } else {
        setProductsUp(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const result = await getProductsFromClient(id!, 'EM_BAIXA')
      if (result.message) {
        alert(result.message)
      } else {
        setProductsDown(result)
      }
    })()
  }, [])

  return (
    <MainContainer>
      <Link to="/" className="link">
        <CardTitle2
          backgroundColor={color.deepGrey}
          icon={<ChevronLeft />}
          text="Detalhamento"
          round="yes"
        />
      </Link>

      <div className="pageTitle">
        <Title fontSize={32} color={color.blue}>
          {clientsSummary.nome}
        </Title>
      </div>
      <div className="productCardSummaryDiv">
        <NumberCard
          variant="average"
          days={120}
          productNumber={clientsSummary.media120Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={30}
          productNumber={clientsSummary.ultimos30Dias}
          tagPercentage={clientsSummary.percentualUltimos30Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={60}
          productNumber={clientsSummary.ultimos60Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={90}
          productNumber={clientsSummary.ultimos90Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={90}
          productNumber={clientsSummary.ultimos120Dias}
          type="product"
        />
      </div>
      <TableContainer>
        <TableCard headers={clientTableTitle} title="productsUp">
          {productsUp.map(item => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.percentual}%</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}
        </TableCard>
        <TableCard headers={clientTableTitle} title="productsDown">
          {productsDown.map(item => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.percentual}%</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}{' '}
        </TableCard>
      </TableContainer>
    </MainContainer>
  )
}
