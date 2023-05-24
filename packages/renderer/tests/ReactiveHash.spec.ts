import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/svelte'
import { expect, test, vi } from 'vitest'
import ReactiveHash from '../src/components/ReactiveHash.svelte'

vi.mock('#preload', () => {
  return {
    sha256sum: vi.fn((s: string) => `${s}:HASHED`),
  }
})

describe('ReactiveHash', () => {
  test('Test inputs', async () => {
    expect(ReactiveHash).toBeTruthy()
    render(ReactiveHash)

    const dataInput = screen.getByDisplayValue('Hello World')
    const hashInput = screen.getByDisplayValue('Hello World:HASHED')

    const dataToHashed = Math.random().toString(36).slice(2, 7)
    await fireEvent.input(dataInput, { target: { value: dataToHashed } })
    expect(hashInput).toHaveValue(`${dataToHashed}:HASHED`)
  })
})
