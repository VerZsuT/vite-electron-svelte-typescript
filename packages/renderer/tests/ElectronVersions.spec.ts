import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/svelte'
import { expect, test, vi } from 'vitest'
import ElectronVersions from '../src/components/ElectronVersions.svelte'

vi.mock('#preload', () => {
  return {
    versions: { lib1: 1, lib2: 2 }
  }
})

describe('ElectronVersions', () => {
  test('Test display versions', async () => {
    expect(ElectronVersions).toBeTruthy()
    render(ElectronVersions)

    const rows = screen.getAllByRole<HTMLTableRowElement>('row')
    expect(rows.length).toBe(2)

    expect(rows[0].querySelector('th')).toHaveTextContent('lib1 :')
    expect(rows[0].querySelector('td')).toHaveTextContent('v1')

    expect(rows[1].querySelector('th')).toHaveTextContent('lib2 :')
    expect(rows[1].querySelector('td')).toHaveTextContent('v2')
  })
})
