import { render, screen } from '@testing-library/react';
import BookingPage from "./components/BookingPage";


describe('First test', ()=>{
  test('Booking Page отображает заголовок', () => {
    render(<BookingPage />);
    // Проверяем, что заголовок отображается
    expect(screen.getByText('Table reservation')).toBeInTheDocument();
  })
})