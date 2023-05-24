import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/svelte'
import { expect, test, vi } from 'vitest'
import MessageFromMain from '../src/components/MessageFromMain.svelte'

vi.mock('emr-bridge/renderer', () => {
  return {
    Bridge: {
      as: () => ({
        getMessage: () => 'message'
      })
    }
  }
})

describe('MessageFromMain', () => {
  test('Test display message', async () => {
    expect(MessageFromMain).toBeTruthy()
    render(MessageFromMain)

    expect(await screen.findByText('message')).toBeInTheDocument()
  })
})
