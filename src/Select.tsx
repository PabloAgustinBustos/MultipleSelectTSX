import React from 'react'
import s from "./Select.module.css"

type SelectOption = {
  label: string
  value: any
}

type SelectProps = {
  options: SelectOption[]
  value?: SelectOption | undefined                                // current selected option
  onChange: (value: SelectOption | undefined) => void
}

const Select = ({value, onChange, options}: SelectProps) => {
  return (
    <div className={s.container}>
      <span className={s.value}>Value</span>
      <button className={s["clear-btn"]}>&times;</button>

      <div className={s.divider}></div>
      <div className={s.caret}></div>

      <ul className={s.options}>
        {options.map(op => (
          <li key={op.label} className={s.option}>{op.label}</li>
        ))}
      </ul>
    </div>
  )
}

export default Select