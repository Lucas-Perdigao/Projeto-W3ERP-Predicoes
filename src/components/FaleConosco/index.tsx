import { Button } from '../Button'
import hands from '../../assets/images/hands.png'
import { FaleConoscoStyle, FaleConoscoTextStyle } from './styles'

export function FaleConosco() {
  return (
    <FaleConoscoStyle>
      <img alt="Mãos dadas" src={hands} />
      <FaleConoscoTextStyle>
        Precisando de <strong>ajuda ou suporte</strong> em algo?
      </FaleConoscoTextStyle>
      <Button
        text="Fale conosco"
        variant="faleConosco"
        onClick={() => console.log('teste Fale Conosco')}
      />
    </FaleConoscoStyle>
  )
}
