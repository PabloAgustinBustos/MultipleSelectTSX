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
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  
  return (<>
    <Select options={options} value={value} onChange={o => setValue(o)}/>
  </>)
}

export default App
