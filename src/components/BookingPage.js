import BookingForm from "./BookingForm";

function BookingPage() {

  return (
    
    <section id="mypopup" className="popup">
        <div className="popup__wrapper">
            <h2 className="section__title">Table reservation</h2>
            <h3 className="section__subtitle contact__subtitle">Please fill the form</h3>
            <BookingForm/>
        </div>
        {/* <button className='close__popup' type="button">X</button> */}
    </section>
);
}
                      
export default BookingPage;