import React, { useContext } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { ElectionContext } from '../../context/Provider'

function DropdownFilterUF() {
  const { partials } = useContext(ElectionContext)
  const options = partials.allUfs.map((uf) => {
    return {
      key: uf,
      value: uf,
      text: partials.byUf[uf].name,
    }
  })
  return (
    <Dropdown
      clearable
      multiple
      search
      selection
      options={options}
      placeholder="Filtrar por Estados"
      style={{ bottom: '5px' }}
    ></Dropdown>
  )
}

export default DropdownFilterUF
