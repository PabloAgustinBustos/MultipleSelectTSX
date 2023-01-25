import { useState } from 'react'
import Select from './Select'

const options = [
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
]

function App() {
  return (<>
    <Select options={options}/>
  </>)
}

export default App
