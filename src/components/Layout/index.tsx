import { MenuSidebar } from '../MenuSidebar'
import { UserHeader } from '../UserHeader'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div style={{ display: 'flex' }}>
      <MenuSidebar />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <UserHeader
          user={{ name: 'Lucas Perdigão', email: 'lucas@email.com' }}
        />
        <main>{children}</main>
      </div>
    </div>
  )
}

// Tirar o inline
