import { SyntheticEvent, useState } from 'react'
import s from "./Select.module.css"

type SelectOption = {
  label: string
  value: string | number
}

type SelectProps = {
  options: SelectOption[]
  value?: SelectOption | undefined                                // current selected option
  onChange: (value: SelectOption | undefined) => void
}

const Select = ({value, onChange, options}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function clearOptions(e: SyntheticEvent){
    e.stopPropagation()
    onChange(undefined)
  }

  function choose(option: SelectOption){
    if(option !== value) {
      onChange(option)
      setIsOpen(false)
    }
  }

  const isOptionSelected = (option: SelectOption) => option === value

  return (
    <div 
      onClick={() => setIsOpen(prev => !prev)} 
      onBlur={() => setIsOpen(false)} 
      tabIndex={0} 
      className={s.container}
    >
      <span className={s.value}>{value?.label}</span>
      <button className={s["clear-btn"]} onClick={clearOptions}>&times;</button>

      <div className={s.divider}></div>
      <div className={s.caret}></div>

      <ul className={`${s.options} ${isOpen && s.show}`}>
        {options.map(op => (
          <li key={op.label} className={`${s.option} ${isOptionSelected(op) && s.selected}`} onClick={e => {
            e.stopPropagation()
            choose(op)
          }}>{op.label}</li>
        ))}
      </ul>
    </div>
  )
}

export default Select