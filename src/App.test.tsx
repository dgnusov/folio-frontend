import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import App from './App.tsx'

test('should render', () => {
  const result = render(<App />)
  expect(result.queryByText('Vite + React')).to.toBeInTheDocument()
})
