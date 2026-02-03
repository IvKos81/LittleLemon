function Contact() {
  return (
        <section id='contact' className="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <h2 className="section__title contact__title">Have any questions?</h2>
                    <h3 className="section__subtitle contact__subtitle">Feel free to contact us</h3>
                    <form action="#" method="get">
                        <label for="your_names">Name*:
                            <input type="text" name="your_names" e1539175832396placeholder="Your name..." required/>
                        </label>
                        <label for="your_mails">E-mail*:
                            <input type="email" name="your_mails" placeholder="Your e-mail..." required/>
                        </label>
                        <label for="your_messages">Message:
                        </label>
                        <textarea name="your_messages" id="your_message" cols="30" rows="5"
                            placeholder="Your message..."></textarea>
                        <label for="your_agrees">
                            <input type="checkbox" name="your_agrees" id="your_agree" />
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