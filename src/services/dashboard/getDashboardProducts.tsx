// var priorDate = new Date(new Date().setDate(today.getDate() - 30));

import axios from 'axios'
import { apiService } from '../config/apiservice'

export const getDashboardProducts = async (classificacao: string) => {
  try {
    const response = await apiService.get('dashboard/produtos', {
      params: {
        classificacao: `${classificacao}`,
        dataFim: '23/09/2022',
        dataInicio: '20/10/2022',
      },
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
