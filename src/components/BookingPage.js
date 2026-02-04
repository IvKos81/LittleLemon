import { useEffect, useReducer} from "react";
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from './../api';


function BookingPage() {  

  // Функция инициализации
const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; // "2026-02-04"
    try {
      // Используем API для получения времени на сегодня
      const times = await fetchAPI(today);
      return times || ['17:00', '18:00', '19:00']; // fallback на случай ошибки
    } catch (error) {
      console.error('Ошибка при загрузке начального времени:', error);
      return ['17:00', '18:00', '19:00'];
    }
  };
  
  // Функция обновления
  const updateTimes = async (selectedDate) => {
    if (!selectedDate) {
      return await initializeTimes();
    }
    
    try {
      const times = await fetchAPI(new Date(selectedDate));
      return times || [];
    } catch (error) {
      console.error('Ошибка при загрузке времени для даты:', error);
      return [];
    }
  };
  
  // Редуктор
const timesReducer = (state, action) => {
    switch (action.type) {
      case 'SET_TIMES':
        return action.payload;
      case 'LOADING':
        return []; // или можно показать "Загрузка..."
      default:
        return state;
    }
  };
  
  // useReducer хук
   const [availableTimes, dispatch] = useReducer(timesReducer, []);

  // Загружаем начальное время при монтировании
  useEffect(() => {
    const loadInitialTimes = async () => {
      dispatch({ type: 'LOADING' });
      const times = await initializeTimes();
      dispatch({ type: 'SET_TIMES', payload: times });
    };
    
    loadInitialTimes();
  }, []);
  
  // Обработчик изменения даты
   const handleDateChange = async (date) => {
    dispatch({ type: 'LOADING' });
    const times = await updateTimes(date);
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  // Функция отправки формы
  const submitForm = async (formData) => {
    try {
      const result = await submitAPI(formData);
      console.log('Форма успешно отправлена:', result);
      return result;
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      return false;
    }
  };


  return (
    
    <section id="mypopup" className="popup">
        <div className="popup__wrapper">
            <h2 className="section__title">Table reservation</h2>
            <h3 className="section__subtitle contact__subtitle">Please fill the form</h3>
            <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} onSubmit={submitForm}/>
        </div>
        {/* <button className='close__popup' type="button">X</button> */}
    </section>
);
}
                      
export default BookingPage; 



    