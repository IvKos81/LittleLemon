import { useState } from "react";

function Contact() {

    const [visitorName, setVisitorName] = useState('');
    const [visitorMail, setVisitorMail] = useState('');
    const [visitorMessage, setVisitorMessage] = useState('');
    const [visitorAgreement, setVisitorAgreement] = useState('');

    const  dropVisitorForm = () => {
        setVisitorName('');
        setVisitorMail('');
        setVisitorMessage('');
        setVisitorAgreement('');
    }
    
    const handleVisitorSubmit = (evt) => {
        alert(`Your request sent! We will answer you a soon as possible. Your data is
            Name: ${visitorName}
            Mail: ${visitorMail}
            Message: ${visitorMessage}
            Agreement: ${visitorAgreement}
           Thank you for your cooperation;
        `);
        dropVisitorForm();
    }

  return (
        <section id='contact' className="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <h2 className="section__title contact__title">Have any questions?</h2>
                    <h3 className="section__subtitle contact__subtitle">Feel free to contact us</h3>
                    <form onSubmit={handleVisitorSubmit}>
                        <label htmlFor="your_names">Name*:
                            <input type="text" id="your_names" placeholder="Your name..." required value={visitorName} onChange={(evt)=>setVisitorName(evt.target.value)}/>
                        </label>
                        <label htmlFor="your_mails">E-mail*:
                            <input type="email" name="your_mails" placeholder="Your e-mail..." required value={visitorMail} onChange={(evt)=>setVisitorMail(evt.target.value)}/>
                        </label>
                        <label htmlFor="your_messages">Message:
                        </label>
                        <textarea name="your_messages" id="your_message" cols="30" rows="5"
                            placeholder="Your message..." value={visitorMessage} onChange={(evt)=>setVisitorMessage(evt.target.value)}></textarea>
                        <label htmlFor="your_agrees">
                            <input type="checkbox" name="your_agrees" id="your_agree" value={visitorAgreement} onChange={(evt)=>setVisitorAgreement(evt.target.value)}/>
                            I agree to provide my personal data.
                        </label>
                        <input type="submit" value="Send message" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;