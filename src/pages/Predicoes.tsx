import { useEffect, useState } from 'react'
import { ClientCard } from '../components/ClientCard'
import { MainContainer } from '../components/MainContainer/styles'
import { ClientCardContainer } from '../components/ClientCard/styles'
import { SearchInput } from '../components/SearchInput'
import { Title } from '../components/Title/styles'
import { getPredicao } from '../services/predicao/getPredicao'

type PredicoesType = {
  id: number
  nome: string
  produtos: [
    {
      id: number
      nome: string
      proximaCompra: string
    },
    {
      id: number
      nome: string
      proximaCompra: string
    },
    {
      id: number
      nome: string
      proximaCompra: string
    }
  ]
}[]

export function Predicoes() {
  const [predicoes, setPredicoes] = useState<PredicoesType>([])
  const [searchParam, setSearchParam] = useState('')

  // useEffect(() => {
  //   ;(async () => {
  //     const result = await getPredicao()
  //     if (result.message) {
  //       alert(result.message)
  //     } else {
  //       setPredicoes(result)
  //     }
  //   })()
  // }, [])

  const fetchPredicoes = async () => {
    const result = await getPredicao(searchParam)
    if (result.message) {
      alert(result.message)
    } else {
      setPredicoes(result)
    }
  }

  useEffect(() => {
    fetchPredicoes()
  }, [])

  return (
    <MainContainer>
      <Title fontSize={32}>Predições</Title>

      <div className="whiteContainer flex">
        <SearchInput
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          onClick={fetchPredicoes}
        />
      </div>

      <ClientCardContainer>
        {predicoes.map(clientItem => (
          <ClientCard
            key={clientItem.id}
            clientName={clientItem.nome}
            products={clientItem.produtos}
            id={clientItem.id}
          />
        ))}
      </ClientCardContainer>
    </MainContainer>
  )
}
