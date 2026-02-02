function PopupReservation() {
  return (
    
    <section id="mypopup" className="popup" popover>
        <div className="popup__wrapper">
            <h2 className="section__title">Table reservation</h2>
            <h3 className="section__subtitle contact__subtitle">Please fill the form</h3>
            <form action="#" method="get">
                <label for="your_date">Date*:
                    <input type="date" name="your_date" required />
                </label>
                <label for="your_time">Time of arrival*:
                    <input type="time" name="your_time" list="your_timetable" id="your_time" min="09:00" max="23:00"
                        step="1800" value="09:00" required />
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
                <label for="your_guests">Number of guests*:
                    <input type="number" name="your_guests" min="0" max="6" placeholder="0" required />
                </label>
                <label for="your_occassion">Occassion:
                    <select name="your_occassion" id="occassion">
                        <option value="Birthday">Birthday</option>
                        <option value="Evening">Evening</option>
                        <option value="Henstag">Henstag</option>
                        <option value="Party">Party</option>
                    </select>
                </label>
                <label for="your_place">Table location:
                    <select name="your_place" id="place">
                        <option value="Open area">Open area</option>
                        <option value="Inner hall">Inner hall</option>
                        <option value="Conservatory">Conservatory</option>
                        <option value="Cabinet">Cabinet</option>
                    </select>
                </label>
                <label for="your_name">Name*:
                    <input type="text" name="your_name" placeholder="Your name..." required />
                </label>
                <label for="your_mail">E-mail*:
                    <input type="email" name="your_mail" placeholder="Your e-mail..." required />
                </label>
                <label for="your_message">Message:
                </label>
                <input type="text" name="your_message" id="your_message" placeholder="Your message..." />
                <label for="your_agree">
                    <input type="checkbox" name="your_agree" id="your_agree" />
                    I agree to provide my personal data.
                </label>
                <input type="submit" value="Send message" />
            </form>
        </div>
        <button className='close__popup' type="button" popovertargetaction="hide" popovertarget="mypopup">X</button>
    </section>
);
}
                      
export default PopupReservation;