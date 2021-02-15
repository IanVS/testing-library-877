import React from 'react'
import {render} from '@testing-library/react'

const Label = () => {
  return (
    <div>
      <label htmlFor="first_name">First name</label>
      <input
        id="first_name"
        name="first_name"
        type="text"
        value=""
        onChange={() => {}}
      />
    </div>
  )
}

test('Renders a label', () => {
  const content = render(<Label />)
  content.getByLabelText('First name')
})
