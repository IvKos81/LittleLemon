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
                <label htmlFor="date">Date*:
                    <input type="date" name="date" id='date' aria-label="On Click" value={formData.date} onChange={handleDateInputChange} required />
                    <span className="validity"></span>
                </label>
                <label htmlFor="time">Time of arrival*:
                    <input type="time" name="time" aria-label="On Click" list="your_timetable" id="time" min="17:00" max="23:00"
                        step="1800" value={formData.time} onChange={handleDateInputChange} required />
                    <span className="validity"></span>
                    <datalist id="your_timetable">
                       {availableTimes.map(time => (
                         <option key={time} value={time}>{time}</option>
                        ))}
                    </datalist>
                </label>
                <label htmlFor="guests">Number of guests*:
                    <input type="number" name="guests" id='g' aria-label="On Click" min="1" max="6" placeholder="0" value={formData.guests} onChange={handleDateInputChange} required />
                    <span className="validity"></span>
                </label>
                <label htmlFor="occassion">Occassion:
                    <select name="occassion" id="occassion" value={formData.occassion} onChange={handleDateInputChange}>
                        <option value="---">---</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Evening">Evening</option>
                        <option value="Henstag">Henstag</option>
                        <option value="Party">Party</option>
                    </select>
                </label>
                <label htmlFor="place">Table location:
                    <select name="tableloc" id="place" aria-label="On Click" value={formData.tableloc} onChange={handleDateInputChange}>
                        <option value="---">---</option>
                        <option value="Open area">Open area</option>
                        <option value="Inner hall">Inner hall</option>
                        <option value="Conservatory">Conservatory</option>
                        <option value="Cabinet">Cabinet</option>
                    </select>
                </label>
                <label htmlFor="name">Name*:
                    <input type="text" name="name" id='name' placeholder="Your name..." minLength='2' required value={formData.name} onChange={handleDateInputChange}/>
                    <span className="validity"></span>
                </label>
                <label htmlFor="mail">E-mail*:
                    <input type="email" name="mail" id='mail' placeholder="Your e-mail..." required value={formData.mail} onChange={handleDateInputChange}/>
                    <span className="validity"></span>
                </label>
                <label htmlFor="your_message">Message:
                </label>
                <input type="text" name="message" id="your_message" placeholder="Your message..." value={formData.message} onChange={handleDateInputChange}/>
                <label htmlFor="your_agree">
                    <input type="checkbox" className='check' name="agree" id="your_agree" checked={formData.agree} onChange={handleDateInputChange}/>
                    I agree to provide my personal data.
                </label>
                <input className='submit_button' type="submit" aria-label="On Click" value="Send message"/>
            </form>
);
}
                      
export default BookingForm;