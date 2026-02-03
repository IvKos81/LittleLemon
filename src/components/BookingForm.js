import { useState } from "react";

function BookingForm() {
  const [userDate, setUserDate] = useState(''); 
  const [userTime, setUserTime] = useState(''); 
  const [userGuests, setUserGuests] = useState(''); 
  const [userOccassion, setUserOccassion] = useState(''); 
  const [userTableLoc, setUserTableLoc] = useState(''); 
  const [userName, setUserName] = useState(''); 
  const [userMail, setUserMail] = useState(''); 
  const [userMessage, setUserMessage] = useState(''); 


  const clearForm = () => {
      setUserDate('');
      setUserTime('');
      setUserGuests('');
      setUserOccassion('');
      setUserTableLoc('');
      setUserName('');
      setUserMail('');
      setUserMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert( `Citizen ${userName} with mail address ${userMail} politely asked book table on ${userDate} at ${userTime}. He will arrive for ${userOccassion} in ${userTableLoc} with ${userGuests} guests. Please pay attention for next message fom him: ${userMessage}`);
    clearForm();
}

  return (
    
    <form onSubmit={handleSubmit}>
                <label htmlFor="your_date">Date*:
                    <input type="date" name="your_date" value={userDate} onChange={(e)=>setUserDate(e.target.value)} required />
                </label>
                <label htmlFor="your_time">Time of arrival*:
                    <input type="time" name="your_time" list="your_timetable" id="your_time" min="09:00" max="23:00"
                        step="1800" value={userTime} onChange={(e)=>setUserTime(e.target.value)} required />
                    <datalist id="your_timetable">
                        <option value="09:00"></option>
                        <option value="09:30"></option>
                        <option value="10:00"></option>
                        <option value="10:30"></option>
                        <option value="11:00"></option>
                        <option value="11:30"></option>
                        <option value="12:00"></option>
                        <option value="12:30"></option>
                        <option value="13:00"></option>
                        <option value="13:30"></option>
                        <option value="14:00"></option>
                        <option value="14:30"></option>
                        <option value="15:00"></option>
                        <option value="15:30"></option>
                        <option value="16:00"></option>
                        <option value="16:30"></option>
                        <option value="17:00"></option>
                        <option value="17:30"></option>
                        <option value="18:00"></option>
                        <option value="18:30"></option>
                        <option value="19:00"></option>
                        <option value="19:30"></option>
                        <option value="20:00"></option>
                        <option value="20:30"></option>
                        <option value="21:00"></option>
                        <option value="21:30"></option>
                        <option value="22:00"></option>
                        <option value="22:30"></option>
                    </datalist>
                </label>
                <label htmlFor="your_guests">Number of guests*:
                    <input type="number" name="your_guests" min="0" max="6" placeholder="0" value={userGuests} onChange={(e)=>setUserGuests(e.target.value)} required />
                </label>
                <label htmlFor="your_occassion">Occassion:
                    <select name="your_occassion" id="occassion" value={userOccassion} onChange={(e)=>setUserOccassion(e.target.value)}>
                        <option value="Birthday">Birthday</option>
                        <option value="Evening">Evening</option>
                        <option value="Henstag">Henstag</option>
                        <option value="Party">Party</option>
                    </select>
                </label>
                <label htmlFor="your_place">Table location:
                    <select name="your_place" id="place" value={userTableLoc} onChange={(e)=>setUserTableLoc(e.target.value)}>
                        <option value="Open area">Open area</option>
                        <option value="Inner hall">Inner hall</option>
                        <option value="Conservatory">Conservatory</option>
                        <option value="Cabinet">Cabinet</option>
                    </select>
                </label>
                <label htmlFor="your_name">Name*:
                    <input type="text" name="your_name" placeholder="Your name..." required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                </label>
                <label htmlFor="your_mail">E-mail*:
                    <input type="email" name="your_mail" placeholder="Your e-mail..." required value={userMail} onChange={(e)=>setUserMail(e.target.value)}/>
                </label>
                <label htmlFor="your_message">Message:
                </label>
                <input type="text" name="your_message" id="your_message" placeholder="Your message..." value={userMessage} onChange={(e)=>setUserMessage(e.target.value)}/>
                <label htmlFor="your_agree">
                    <input type="checkbox" name="your_agree" id="your_agree" />
                    I agree to provide my personal data.
                </label>
                <input type="submit" value="Send message" />
            </form>
);
}
                      
export default BookingForm;