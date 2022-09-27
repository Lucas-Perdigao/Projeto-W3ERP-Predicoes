import { ChartLine } from '../../assets/icons/chart-line'
import { FacialCleanser } from '../../assets/icons/facial-cleanser'
import { Logo } from '../../assets/icons/logo'
import { PieTwo } from '../../assets/icons/pie-two'
import { FaleConosco } from '../FaleConosco'
import { MenuItem } from '../MenuItem'
import { LogoContainer, MenuSidebarStyle, MenuContainer } from './styles'
import { color } from '../../theme/index'

const menu = [
  {
    icon: <PieTwo />,
    text: 'Dashboard',
    url: '/',
  },
  {
    icon: <ChartLine />,
    text: 'Predições',
    url: '/predicoes',
  },
  {
    icon: <FacialCleanser color={color.white} />,
    text: 'Produtos',
    url: '/produtos',
  },
]

export function MenuSidebar() {
  return (
    <MenuSidebarStyle>
      <div>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MenuContainer>
          {menu.map((item, index) => (
            <MenuItem
              icon={item.icon}
              text={item.text}
              url={item.url}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            />
          ))}
        </MenuContainer>
      </div>

      <FaleConosco />
    </MenuSidebarStyle>
  )
}
