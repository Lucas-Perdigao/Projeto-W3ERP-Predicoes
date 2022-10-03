import axios from 'axios'
import { apiService } from '../config/apiservice'

export const postPredicaoDarBaixa = async (
  clienteId: string,
  produtoId: number
) => {
  try {
    const response = await apiService.post(`predicao/${clienteId}/baixa`, {
      produtoId,
    })

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
