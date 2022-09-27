import { Logout } from '../../assets/icons/logout'
import { SettingTwo } from '../../assets/icons/setting-two'
import { UserOptionsStyle } from './styles'

export function UserOptions() {
  return (
    <UserOptionsStyle>
      <div>
        <SettingTwo />
        Configurações
      </div>
      <div>
        <Logout />
        Sair
      </div>
    </UserOptionsStyle>
  )
}
