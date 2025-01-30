import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import App from './App.tsx'

test('should render', () => {
  expect(() => render(<App />)).not.toThrow()
})
