export type CardTitleVariant =
  | 'products'
  | 'clients'
  | 'history'
  | 'runningOut'
  | 'clientsUp'
  | 'clientsDown'
  | 'productsUp'
  | 'productsDown'

export type ProductClientType = {
  id: number
  nome: string
  percentual: number
}

export type ProductClientArray = ProductClientType[]
