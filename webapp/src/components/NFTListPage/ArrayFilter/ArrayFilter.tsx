import React from 'react'
import { Header } from 'decentraland-ui'

import { Props } from './ArrayFilter.types'
import './ArrayFilter.css'

const getClasses = (value: string, values: string[]) => {
  const classes = ['option']
  if (values.includes(value)) {
    classes.push('selected')
  }
  return classes.join(' ')
}

const getNewValues = (value: string, values: string[]) => {
  return values.some(x => x === value)
    ? values.filter(x => x !== value)
    : [...values, value]
}

const ArrayFilter = (props: Props) => {
  const { name, values, options, onChange } = props
  return (
    <div className="ArrayFilter">
      <Header sub className="name">
        {name}
      </Header>
      <div className="options">
        {options.map(option => (
          <div
            className={getClasses(option.value, values)}
            onClick={() => onChange(getNewValues(option.value, values))}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArrayFilter