import { useReducer} from "react";
import BookingForm from "./BookingForm";

function BookingPage() {  
  // Функция инициализации
  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  };
  
  // Функция обновления
  const updateTimes = (state, action) => {
    const selectedDate = action.payload;
     if (!selectedDate) {
      return initializeTimes(); // если дата не выбрана — вернуть стандартное время
    }

    // Создаём объект Date из строки
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay(); // 0 = воскресенье, 1 = понедельник, ..., 6 = суббота

    let availableTimes;

    switch (dayOfWeek) {
      case 0: // Воскресенье
        availableTimes = ['16:00', '17:00', '18:00'];
        break;
      case 1: // Понедельник
      case 2: // Вторник  
      case 3: // Среда
      case 4: // Четверг
        availableTimes = ['17:00', '18:00', '19:00'];
        break;
      case 5: // Пятница
      case 6: // Суббота
        availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
        break;
      default:
        availableTimes = initializeTimes();
    }

    console.log(`📅 Дата: ${selectedDate} → День недели: ${dayOfWeek} → Время:`, availableTimes);
    return availableTimes;

  };
  
  // Редуктор
  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'INITIALIZE':
        return initializeTimes();
      case 'UPDATE':
        return updateTimes(state, action);
      default:
        return state;
    }
  };
  
  // useReducer хук
  const [availableTimes, dispatch] = useReducer(
    timesReducer, 
    [], 
    initializeTimes
  );
  
  // Обработчик изменения даты
  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE', payload: date });
  };

  return (
    
    <section id="mypopup" className="popup">
        <div className="popup__wrapper">
            <h2 className="section__title">Table reservation</h2>
            <h3 className="section__subtitle contact__subtitle">Please fill the form</h3>
            <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange}/>
        </div>
        {/* <button className='close__popup' type="button">X</button> */}
    </section>
);
}
                      
export default BookingPage; 



    