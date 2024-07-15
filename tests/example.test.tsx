import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

const ExampleComponent = () => {
  return <div>Hello, world!</div>
}

test('renders hello world', () => {
  render(<ExampleComponent />)
  expect(screen.getByText('Hello, world!')).toBeInTheDocument()
})
