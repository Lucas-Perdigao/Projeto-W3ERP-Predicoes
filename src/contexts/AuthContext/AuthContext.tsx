import { createContext, useEffect, useState } from 'react'
import { Title } from '../../components/Title/styles'
import { apiService } from '../../services/config/apiservice'

type ContextType = {
  authentified: boolean
  loading: boolean
}

export const AuthContext = createContext<ContextType>({
  authentified: false,
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authentified, setAuthentified] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const conversion = JSON.parse(token)
      apiService.defaults.headers.common.Authorization = `${conversion.type} ${conversion.token}`
      setAuthentified(true)
    } else {
      setAuthentified(false)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <Title fontSize={32}>Carregando...</Title>
  }

  return (
    <AuthContext.Provider value={{ authentified, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
