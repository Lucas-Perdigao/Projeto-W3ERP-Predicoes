import axios from 'axios'
import { apiService } from '../config/apiservice'

export const getClientsFromProduct = async (
  id: string,
  classificacao: string
) => {
  try {
    const response = await apiService.get(
      `produto/${id}/clientes?classificacao=${classificacao}`
    )

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { message: 'Usuário não autenticado.' }
      }
      if (error.response?.status === 403) {
        return { message: 'Usuário não possui permissão de acesso.' }
      }
      if (error.response?.status === 404) {
        return { message: 'Página não encontrada' }
      }
    }
  }

  return {
    message:
      'Erro não identificado (favor entrar em contato com os desenvolvedores)',
  }
}
