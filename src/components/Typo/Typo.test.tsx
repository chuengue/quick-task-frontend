import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Typo from './Typo'

describe('<Typo />', () => {
  test('it should mount', () => {
    render(<Typo />)

    const typo = screen.getByTestId('Typo')

    expect(typo).toBeInTheDocument()
  })
})
