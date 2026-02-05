import { Link } from "react-router-dom";

function ConfirmationPage({bookingData}) {
  console.log(bookingData);
  return(
    <section id="mypopup" class="popup" popover>
        <div class="popup__wrapper">
            <h2 class="section__title">Booking confirmation</h2>
            <h3 class="section__subtitle contact__subtitle">Booking status:</h3>
            <p>Your booking is succesful.</p>
            <p>Here is details of your booking:</p>
            <hr/>
            <p><strong>Your name:</strong> {bookingData.name}</p>
            <p><strong>Your mail:</strong> {bookingData.mail}</p>
            <hr/>
            <p><strong>Date of visit:</strong> {bookingData.date}</p>
            <p><strong>Time of arrival:</strong> {bookingData.time}</p>
            <hr/>
            <p><strong>Occassion:</strong> {bookingData.occassion || 'No info'}</p>
            <p><strong>Number of guests:</strong> {bookingData.guests}</p>
            <p><strong>Table location:</strong> {bookingData.tableloc || 'No info'}</p>
            <hr/>
            <p><strong>Additional message:</strong> {bookingData.message}</p>
            <p><strong>Data sending agreement:</strong> {bookingData.agree ? 'agree':'disagree'}</p>
            <hr/>
            <Link to='/' type='button' className="reserve">Back to main page</Link>
        </div>
    </section>
  )
}

export default ConfirmationPage;