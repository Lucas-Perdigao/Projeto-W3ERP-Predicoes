import { Link, useNavigate } from 'react-router-dom'
import { CheckOne } from '../assets/icons/check-one'
import { ChevronLeft } from '../assets/icons/chevron left'
import { Mail } from '../assets/icons/mail'
import { Phone } from '../assets/icons/phone-telephone'
import { CardTitle2 } from '../components/CardTitle2'
import { MainContainer } from '../components/MainContainer/styles'
import { MainHeaderStyle } from '../components/MainHeader/styles'
import { TableCard } from '../components/TableCard'
import { TableContainer } from '../components/TableContainer/styles'
import { color } from '../theme'

const clientItems = {
  id: 1,
  client: 'Hotel Íbis',
  products: [
    {
      name: 'Álcool em gel',
      date: '02/09/22',
    },
    {
      name: 'Água sanitária',
      date: '05/09/22',
    },
    {
      name: 'Papel higiênico',
      date: '10/09/22',
    },
  ],
}

const productItems = [
  {
    id: 1,
    product: 'Papel higiênico',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 2,
    product: 'Álcool em gel',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 3,
    product: 'Sabonete',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 4,
    product: 'Detergente',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 5,
    product: 'Água sanitária',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 6,
    product: 'Limpador Multiuso',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 7,
    product: 'Perfume',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 8,
    product: 'Cloro',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 9,
    product: 'Limpa piso',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
  {
    id: 10,
    product: 'Alvejante',
    ultimaCompra: '23/08',
    quantidade: 3,
  },
]

const titleTable = ['ID', 'Produto', 'Última compra', 'Qtd.', 'Dar baixa']

const goToPage = (url: string) => {
  const navigate = useNavigate()
  navigate(url)
}

export function ClienteDetalhes2() {
  return (
    <MainContainer>
      <CardTitle2
        backgroundColor={color.deepGrey}
        icon={<ChevronLeft />}
        text="Predição"
        round="yes"
      />

      <MainHeaderStyle>
        <div className="predictionsHeader">
          <div className="predictionsHeaderTitle">
            {clientItems.client}, id:{clientItems.id}
          </div>
          <div className="predictionsHeaderSubtitle">
            <div className="subtitles">
              <Phone />
              31 99458-9894
            </div>
            <div className="subtitles">
              <Mail />
              hotelibis@gmail.com
            </div>
          </div>
        </div>

        <TableContainer>
          <TableCard headers={titleTable} title="history">
            {productItems.map(item => (
              <tr
                className="tableItems"
                onClick={() => goToPage(`/predicao/${item.id}`)}
              >
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.ultimaCompra}</td>
                <td>{item.quantidade}</td>
                <td>
                  <Link to={`/predicao/${item.id}`}>
                    <CheckOne />
                  </Link>
                </td>
              </tr>
            ))}{' '}
          </TableCard>
          <TableCard headers={titleTable} title="runningOut">
            {productItems.map(item => (
              <tr
                className="tableItems"
                onClick={() => goToPage(`/predicao/${item.id}`)}
              >
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.ultimaCompra}</td>
                <td>{item.quantidade}</td>
                <td>
                  <Link to={`/predicao/${item.id}`}>
                    <CheckOne />
                  </Link>
                </td>
              </tr>
            ))}{' '}
          </TableCard>
        </TableContainer>
      </MainHeaderStyle>
    </MainContainer>
  )
}
