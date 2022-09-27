import { ClientCard } from '../components/ClientCard'
import { MainContainer } from '../components/MainContainer/styles'
import { ClientCardContainer } from '../components/ClientCard/styles'
import { SearchInput } from '../components/SearchInput'
import { Title } from '../components/Title/styles'

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

export function Predicoes() {
  return (
    <MainContainer>
      <Title fontSize={32}>Predições</Title>
      <SearchInput />
      <ClientCardContainer>
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
        <ClientCard
          clientName={clientItems.client}
          products={clientItems.products}
          id={clientItems.id}
        />
      </ClientCardContainer>
    </MainContainer>
  )
}
