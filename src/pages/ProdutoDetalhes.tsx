import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from '../assets/icons/chevron left'
import { CardTitle2 } from '../components/CardTitle2'
import { MainContainer } from '../components/MainContainer/styles'
import { NumberCard } from '../components/NumberCard'
import { TableCard } from '../components/TableCard'
import { TableContainer } from '../components/TableContainer/styles'
import { Title } from '../components/Title/styles'
import { getClientsFromProduct } from '../services/produtos/getClientsFromProduct'
import { getProdutosResumo } from '../services/produtos/getProdutosResumo'
import { color } from '../theme'

type ProdutoResumoType = {
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

export function ProdutoDetalhes() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [produtosResumo, setProdutosResumo] = useState<ProdutoResumoType>(
    {} as ProdutoResumoType
  )
  const [clientsUp, setClientsUp] = useState<ClientsFromProductType>(
    [] as ClientsFromProductType
  )
  const [clientsDown, setClientsDown] = useState<ClientsFromProductType>(
    [] as ClientsFromProductType
  )

  const goToPage = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    ;(async () => {
      const result = await getProdutosResumo(id!)
      if (result.message) {
        alert(result.message)
      } else {
        setProdutosResumo(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const result = await getClientsFromProduct(id!, 'EM_ALTA')
      if (result.message) {
        alert(result.message)
      } else {
        setClientsUp(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const result = await getClientsFromProduct(id!, 'EM_BAIXA')
      if (result.message) {
        alert(result.message)
      } else {
        setClientsDown(result)
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
          {produtosResumo.nome}
        </Title>
      </div>
      <div className="productCardSummaryDiv">
        <NumberCard
          variant="average"
          days={120}
          productNumber={produtosResumo.media120Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={30}
          productNumber={produtosResumo.ultimos30Dias}
          tagPercentage={produtosResumo.percentualUltimos30Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={60}
          productNumber={produtosResumo.ultimos60Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={90}
          productNumber={produtosResumo.ultimos90Dias}
          type="product"
        />
        <NumberCard
          variant="lastDays"
          days={120}
          productNumber={produtosResumo.ultimos120Dias}
          type="product"
        />
      </div>
      <TableContainer>
        <TableCard headers={clientTableTitle} title="clientsUp">
          {clientsUp.map((item, index) => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/cliente/${item.id}`)}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.percentual}%</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}
        </TableCard>
        <TableCard headers={clientTableTitle} title="clientsDown">
          {clientsDown.map((item, index) => (
            <tr
              className="tableItems"
              onClick={() => goToPage(`/cliente/${item.id}`)}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
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
