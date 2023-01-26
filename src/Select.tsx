import { SyntheticEvent, useState } from 'react'
import s from "./Select.module.css"

type SelectOption = {
  label: string
  value: string | number
}

type SingleSelectProps = {
  multiple?: false
  value?: SelectOption | undefined                                // current selected option
  onChange: (value: SelectOption | undefined) => void             // set the current option
}

type MultipleSelectProps = {
  multiple: true
  value?: SelectOption[] | undefined                                // current selected options
  onChange: (value: SelectOption[] | undefined) => void
}

type SelectProps = {
  options: SelectOption[]
} & (SingleSelectProps | MultipleSelectProps)

const Select = ({multiple, value, onChange, options}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function clearOptions(e: SyntheticEvent){
    e.stopPropagation()
    
    if(multiple) onChange([])
    else onChange(undefined)
  }

  function choose(option: SelectOption){
    if(multiple){
      if(value?.includes(option)){
        onChange(value.filter(op => op !== option))
      }else{
        onChange([...value as [], option])
      }
    }else{
      if(option !== value) {
        onChange(option)
        setIsOpen(false)
      }
    }
  }

  const isOptionSelected = (option: SelectOption) => multiple ? value?.includes(option) : option === value

  return (
    <div 
      onClick={() => setIsOpen(prev => !prev)} 
      onBlur={() => setIsOpen(false)} 
      tabIndex={0} 
      className={s.container}
    >
      <span className={s.value}>
        {multiple ? (
          value?.map(v => (
            <button 
              key={v.value} 
              className={`${s["option-badge"]}`}
              onClick={e => {
                e.stopPropagation()
                choose(v)
              }
            }>{v.label} <span className={`${s["remove-btn"]}`}>&times;</span>
            </button>
          ))
        ) : value?.label}</span>
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