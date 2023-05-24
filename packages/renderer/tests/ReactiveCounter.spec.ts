import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import ReactiveCounter from '../src/components/ReactiveCounter.svelte'

describe('ReactiveCounter', () => {
  test('Test counter', async () => {
    expect(ReactiveCounter).toBeTruthy()
    render(ReactiveCounter)

    const button = screen.getByText('count is: 0')
    await fireEvent.click(button)
    expect(button).toHaveTextContent('count is: 1')
  })
})
