import { useState } from "react";


function BookingForm({availableTimes, onDateChange, onSubmit}) {

   const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    tableloc: '',
    name: '',
    mail: '',
    message: '',
    agree: false
  });

  const handleDateInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Для чекбокса используем checked, для остальных — value
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Особая логика для даты — уведомляем родителя
    if (name === 'your_date') {
      onDateChange(value);
    }
  };

  const clearForm = () => {
      setFormData({
        date: '',
        time: '',
        guests: '',
        occasion: '',
        tableLocation: '',
        name: '',
        email: '',
        message: '',
        agree: false
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      occassion: formData.occassion,
      tableloc: formData.tableloc,
      name: formData.name,
      mail: formData.mail,
      message: formData.message,
      agree: formData.agree,
    };

    onSubmit(bookingData).then(success => {
      if (success) {
        clearForm();
      }
    });
}

  return (
    
    <form onSubmit={handleSubmit}>
                <label htmlFor="your_date">Date*:
                    <input type="date" name="date" value={formData.date} onChange={handleDateInputChange} required />
                </label>
                <label htmlFor="your_time">Time of arrival*:
                    <input type="time" name="time" list="your_timetable" id="your_time" min="09:00" max="23:00"
                        step="1800" value={formData.time} onChange={handleDateInputChange} required />
                    <datalist id="your_timetable">
                       {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                        ))}
                    </datalist>
                </label>
                <label htmlFor="your_guests">Number of guests*:
                    <input type="number" name="guests" min="0" max="6" placeholder="0" value={formData.guests} onChange={handleDateInputChange} required />
                </label>
                <label htmlFor="your_occassion">Occassion:
                    <select name="occassion" id="occassion" value={formData.occassion} onChange={handleDateInputChange}>
                        <option value="---">---</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Evening">Evening</option>
                        <option value="Henstag">Henstag</option>
                        <option value="Party">Party</option>
                    </select>
                </label>
                <label htmlFor="your_place">Table location:
                    <select name="tableloc" id="place" value={formData.tableloc} onChange={handleDateInputChange}>
                        <option value="---">---</option>
                        <option value="Open area">Open area</option>
                        <option value="Inner hall">Inner hall</option>
                        <option value="Conservatory">Conservatory</option>
                        <option value="Cabinet">Cabinet</option>
                    </select>
                </label>
                <label htmlFor="your_name">Name*:
                    <input type="text" name="name" placeholder="Your name..." required value={formData.name} onChange={handleDateInputChange}/>
                </label>
                <label htmlFor="your_mail">E-mail*:
                    <input type="email" name="mail" placeholder="Your e-mail..." required value={formData.mail} onChange={handleDateInputChange}/>
                </label>
                <label htmlFor="your_message">Message:
                </label>
                <input type="text" name="message" id="your_message" placeholder="Your message..." value={formData.message} onChange={handleDateInputChange}/>
                <label htmlFor="your_agree">
                    <input type="checkbox" name="agree" id="your_agree" checked={formData.agree} onChange={handleDateInputChange}/>
                    I agree to provide my personal data.
                </label>
                <input type="submit" value="Send message" />
            </form>
);
}
                      
export default BookingForm;