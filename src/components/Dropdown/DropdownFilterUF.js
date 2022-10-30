import React, { useContext, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { ElectionContext } from '../../context/Provider'

function DropdownFilterUF({ nav }) {
  const { partials, setPredFilter, setRegFilter } = useContext(ElectionContext)
  const options = partials.allUfs
    .filter((e) => e !== 'BR')
    .map((uf) => {
      return {
        key: uf,
        value: uf,
        text: partials.byUf[uf].name,
      }
    })

  useEffect(() => {
    setRegFilter('')
    setPredFilter([])
  }, [nav])

  return (
    <Dropdown
      clearable
      multiple={nav === 'predict'}
      search
      selection
      options={options}
      placeholder="Filtrar por Estados"
      onChange={(a, b) => {
        nav === 'predict' ? setPredFilter(b.value) : setRegFilter(b.value)
      }}
      style={{ bottom: '5px' }}
    ></Dropdown>
  )
}

export default DropdownFilterUF
