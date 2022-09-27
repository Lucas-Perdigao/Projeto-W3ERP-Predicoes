import { useState } from 'react'
import { SandwitchMenu } from '../../assets/icons/SandwichMenu'
import { UserProfile } from '../../assets/icons/UserProfile'
import { Title } from '../Title/styles'
import { Subtitle } from '../Subtitle/styles'
import { UserHeadStyle, HeaderStyle, UserOptionsStyle } from './styles'
import { color } from '../../theme'
import { Logout } from '../../assets/icons/logout'
import { SettingTwo } from '../../assets/icons/setting-two'
import { ChevronDown } from '../../assets/icons/chevron down'

type UserType = {
  user: {
    name: string
    email: string
  }
}

export function UserHeader({ user }: UserType) {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <HeaderStyle>
      <div>
        <SandwitchMenu />
      </div>
      <UserHeadStyle>
        <UserProfile color={color.blue} />
        <div>
          <Title fontSize={20}>{user.name}</Title>
          <Subtitle fontSize={16}>{user.email}</Subtitle>
        </div>
        <button type="button" onClick={() => setShowOptions(!showOptions)}>
          <ChevronDown />
        </button>
      </UserHeadStyle>

      {showOptions && (
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
      )}
    </HeaderStyle>
  )
}
