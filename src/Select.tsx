import React from 'react'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  options: SelectOption[]
  value?: SelectOption | undefined                                // current selected option
  onChange: (value: SelectOption | undefined) => void
}

const Select = ({value, onChange, options}: SelectProps) => {
  return (
    <div>Select</div>
  )
}

export default Select