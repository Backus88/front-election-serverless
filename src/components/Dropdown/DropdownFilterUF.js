import React, { useContext, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { ElectionContext } from '../../context/Provider'

function DropdownFilterUF() {
  const { partials, setFilter } = useContext(ElectionContext)
  const options = partials.allUfs
    .filter((e) => e !== 'BR')
    .map((uf) => {
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
      onChange={(a, b) => {
        setFilter(b.value)
      }}
      style={{ bottom: '5px' }}
    ></Dropdown>
  )
}

export default DropdownFilterUF
