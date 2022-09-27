import { Dispatch, SetStateAction } from 'react'
import { TableCardStyle } from './styles'
import { CardTitle } from '../CardTitle'
import { TableList } from '../TableList'
import { ToggleView } from '../ToggleView'
import { CardTitleVariant } from '../../types/types'

type Props = {
  title: CardTitleVariant
  children: React.ReactNode
  headers: string[]
  toogle?: true
  stateToogle?: boolean
  setStateToogle?: Dispatch<SetStateAction<boolean>>
}

export function TableCard({
  title,
  children,
  headers,
  toogle,
  stateToogle,
  setStateToogle,
}: Props) {
  return (
    <TableCardStyle>
      <div className="tableHeader">
        <CardTitle variant={title} />

        {toogle && (
          <ToggleView
            switchOnState={stateToogle!}
            setSwitchOnState={() => setStateToogle(!stateToogle)}
          />
        )}
      </div>

      <TableList headersArray={headers}>{children}</TableList>
    </TableCardStyle>
  )
}
