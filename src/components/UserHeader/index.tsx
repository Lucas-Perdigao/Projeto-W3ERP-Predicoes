import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SandwitchMenu } from '../../assets/icons/SandwichMenu'
import { UserProfile } from '../../assets/icons/UserProfile'
import { Title } from '../Title/styles'
import { Subtitle } from '../Subtitle/styles'
import { UserHeadStyle, HeaderStyle, UserOptionsStyle } from './styles'
import { color } from '../../theme'
import { Logout } from '../../assets/icons/logout'
import { SettingTwo } from '../../assets/icons/setting-two'
import { ChevronDown } from '../../assets/icons/chevron down'
import { getUserInfo } from '../../services/user/getUserInfo'
import { apiService } from '../../services/config/apiservice'

type UserInfoType = {
  email: string
  id: number
  nome: string
}

export function UserHeader() {
  const [showOptions, setShowOptions] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    apiService.defaults.headers.common.Authorization = ``
    navigate(`/login`, { replace: true })
  }

  useEffect(() => {
    ;(async () => {
      const result = await getUserInfo()
      if (result.message) {
        alert(result.message)
      } else {
        setUserInfo(result)
      }
    })()
  }, [])

  return (
    <HeaderStyle>
      <div>
        <SandwitchMenu />
      </div>
      <UserHeadStyle>
        <UserProfile color={color.blue} />
        <div>
          <Title fontSize={20}>{userInfo.nome}</Title>
          <Subtitle fontSize={16}>{userInfo.email}</Subtitle>
        </div>
        <button
          className="dropdown"
          type="button"
          onClick={() => setShowOptions(!showOptions)}
        >
          <ChevronDown />
        </button>
      </UserHeadStyle>

      {showOptions && (
        <UserOptionsStyle>
          <div>
            <SettingTwo />
            Configurações
          </div>
          <div className="logout">
            <button type="button" onClick={logout}>
              <Logout />
              Sair
            </button>
          </div>
        </UserOptionsStyle>
      )}
    </HeaderStyle>
  )
}
