import { useState } from 'react'
import Select from './Select'

type Option = {
  label: string
  value: string | number
}

const options: Option[] = [
  {
    label: "First",
    value: 1
  },
  {
    label: "Second",
    value: 2
  },
  {
    label: "Third",
    value: 3
  },
  {
    label: "Four",
    value: 4
  },
  {
    label: "Fifth",
    value: 5
  },
]

function App() {
  const [value, setValue] = useState<Option | undefined>(options[0]);
  const [values, setValues] = useState<Option[]>([options[0]])

  return (<>
    <Select multiple options={options} value={values} onChange={o => setValues(o as [])}/>
    <br></br>
    <Select options={options} value={value} onChange={o => setValue(o)}/>
  </>)
}

export default App
