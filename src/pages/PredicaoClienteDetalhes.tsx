import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CheckOne } from '../assets/icons/check-one'
import { ChevronLeft } from '../assets/icons/chevron left'
import { Mail } from '../assets/icons/mail'
import { Phone } from '../assets/icons/phone-telephone'
import { CardTitle2 } from '../components/CardTitle2'
import { MainContainer } from '../components/MainContainer/styles'
import { MainHeaderStyle } from '../components/MainHeader/styles'
import { TableCard } from '../components/TableCard'
import { TableContainer } from '../components/TableContainer/styles'
import { getPredicaoCliente } from '../services/predicao/getPredicaoCliente'
import { getPredicaoEsgotando } from '../services/predicao/getPredicaoEsgotando'
import { getPredicaoHistorico } from '../services/predicao/getPredicaoHistorico'
import { postPredicaoDarBaixa } from '../services/predicao/postPredicaoDarBaixa'
import { color } from '../theme'

const historicoTitleTable = [
  'ID',
  'Produto',
  'Última compra',
  'Qtd.',
  'Dar baixa',
]
const esgotandoTitleTable = [
  'ID',
  'Produto',
  'Última compra',
  'Prox. compra',
  'Qtd.',
  'Dar baixa',
]

type PredicaoClienteType = {
  email: string
  nome: string
  telefone: string
}

type PredicoesHistoricoType = {
  id: number
  nome: string
  ultimaCompra: string
  quantidade: number
}[]

type PredicoesEsgotandoType = {
  id: number
  nome: string
  ultimaCompra: string
  proximaCompra: string
  quantidade: number
}[]

export function PredicaoClienteDetalhes() {
  const { id } = useParams()
  const [predicaoCliente, setPredicaoCliente] = useState<PredicaoClienteType>(
    {} as PredicaoClienteType
  )
  const [predicoesHistorico, setPredicoesHistorico] =
    useState<PredicoesHistoricoType>([])
  const [predicoesEsgotando, setPredicoesEsgotando] =
    useState<PredicoesEsgotandoType>([])

  const [reload, setReload] = useState(true)

  // const navigate = useNavigate()

  // const goToPage = (url: string) => {
  //   navigate(url)
  // }

  useEffect(() => {
    ;(async () => {
      const result = await getPredicaoCliente(id!)
      if (result.message) {
        alert(result.message)
      } else {
        setPredicaoCliente(result)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const result = await getPredicaoHistorico(id!)
      if (result.message) {
        alert(result.message)
      } else {
        setPredicoesHistorico(result)
      }
    })()
  }, [reload])

  useEffect(() => {
    ;(async () => {
      const result = await getPredicaoEsgotando(id!)
      if (result.message) {
        alert(result.message)
      } else {
        setPredicoesEsgotando(result)
      }
    })()
  }, [reload])

  const darBaixa = async (produtoId: number) => {
    const result = await postPredicaoDarBaixa(id!, produtoId)
    if (result.message) {
      alert(result.message)
    } else {
      setReload(!reload)
    }
  }

  return (
    <MainContainer>
      <Link to="/predicoes" className="link">
        <CardTitle2
          backgroundColor={color.deepGrey}
          icon={<ChevronLeft />}
          text="Predição"
          round="yes"
        />
      </Link>

      <MainHeaderStyle>
        <div className="predictionsHeader">
          <div className="predictionsHeaderTitle">{predicaoCliente.nome}</div>
          <div className="predictionsHeaderSubtitle">
            <div className="subtitles">
              <Phone />
              {predicaoCliente.telefone}
            </div>
            <div className="subtitles">
              <Mail />
              {predicaoCliente.email}
            </div>
          </div>
        </div>
      </MainHeaderStyle>

      <TableContainer>
        <TableCard headers={historicoTitleTable} title="history">
          {predicoesHistorico.map(item => (
            <tr
              className="tableItems"
              // onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
            >
              <td>
                <Link to={`/produto/${item.id}`}>{item.id}</Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>{item.nome}</Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>
                  {item.ultimaCompra.split('-').reverse().join('/')}
                </Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>{item.quantidade}</Link>
              </td>
              <td>
                <button type="button" onClick={() => darBaixa(item.id)}>
                  <CheckOne />
                </button>
              </td>
            </tr>
          ))}{' '}
        </TableCard>
        <TableCard headers={esgotandoTitleTable} title="runningOut">
          {predicoesEsgotando.map(item => (
            <tr
              className="tableItems"
              // onClick={() => goToPage(`/produto/${item.id}`)}
              key={item.id}
            >
              <td>
                <Link to={`/produto/${item.id}`}>{item.id}</Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>{item.nome}</Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>
                  {item.ultimaCompra.split('-').reverse().join('/')}
                </Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>
                  {item.proximaCompra.split('-').reverse().join('/')}
                </Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>{item.quantidade}</Link>
              </td>
              <td>
                <Link to={`/produto/${item.id}`}>
                  <CheckOne />
                </Link>
              </td>
            </tr>
          ))}{' '}
        </TableCard>
      </TableContainer>
    </MainContainer>
  )
}
