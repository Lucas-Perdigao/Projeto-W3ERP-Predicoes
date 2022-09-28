// node v16.15.1
// predicao@w3erp.com.br / 123456

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalStyle } from './assets/GlobalStyle'
import { Wrapper } from './components/Wrapper/styles'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Predicoes } from './pages/Predicoes'
import { Produtos } from './pages/Produtos'
import { Layout } from './components/Layout'
import { ProdutoDetalhes } from './pages/ProdutoDetalhes'
import { ClienteDetalhes } from './pages/ClienteDetalhes'
import { AuthContext, AuthProvider } from './contexts/AuthContext/AuthContext'
import { PredicaoClienteDetalhes } from './pages/PredicaoClienteDetalhes'

function PrivateRoutesAccess({ children }: { children: React.ReactNode }) {
  const { authentified } = useContext(AuthContext)
  if (!authentified) {
    return <Navigate to="/login" />
  }
  return <Layout>{children}</Layout>
}

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoutesAccess>
                  <Dashboard />
                </PrivateRoutesAccess>
              }
            />
            <Route
              path="/predicoes"
              element={
                <PrivateRoutesAccess>
                  <Predicoes />
                </PrivateRoutesAccess>
              }
            />
            <Route
              path="/produtos"
              element={
                <PrivateRoutesAccess>
                  <Produtos />
                </PrivateRoutesAccess>
              }
            />
            <Route
              path="/produto/:id"
              element={
                <PrivateRoutesAccess>
                  <ProdutoDetalhes />
                </PrivateRoutesAccess>
              }
            />
            <Route
              path="/cliente/:id"
              element={
                <PrivateRoutesAccess>
                  <ClienteDetalhes />
                </PrivateRoutesAccess>
              }
            />
            <Route
              path="/predicao/:id"
              element={
                <PrivateRoutesAccess>
                  <PredicaoClienteDetalhes />
                </PrivateRoutesAccess>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
