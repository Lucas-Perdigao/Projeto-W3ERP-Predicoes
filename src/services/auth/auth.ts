import axios from 'axios'
import { apiService } from '../config/apiservice'

export const postLogin = async (login: string, password: string) => {
  try {
    const response = await apiService.post('autenticacao/login', {
      email: login,
      senha: password,
    })

    if (response.status === 200) {
      apiService.defaults.headers.common.Authorization = `${response.data.type} ${response.data.token}`
      localStorage.setItem('token', JSON.stringify(response.data))
      return {
        logged: true,
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { logged: false, message: 'Usuário ou senha incorreta' }
      }
      if (error.response?.status === 403) {
        return { logged: false, message: 'Operação ilegal' }
      }
      if (error.response?.status === 404) {
        return { logged: false, message: 'Usuário não encontrado' }
      }
    }
  }

  return {
    logged: false,
    message: 'Error',
  }
}
