function MainComp() {
  return (
      <main>
        <section id='intro' className="intro">
            <div className="container">
                <div className="intro__wrapper">
                    <div className="intro__block intro__block-title">
                        <h1 className="main__title">Little Lemon</h1>
                        <p className="subtitle">Chicago</p>

                    </div>
                    <div className="intro__block intro__block-subtext">
                        <p className="subtext">We are family owned Mediterranean restaurant focused on traditional recipes
                            served with a modern twist</p>
                    </div>
                    <button type='button' className="reserve" popovertarget="mypopup">Reserve table</button>
                </div>
            </div>
        </section>
        <section id='promo' className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo__title">
                        <h2 className="section__title">This week special</h2>
                    </div>
                    <div className="promo__boxgallery">
                        <div className="promobox">
                            <div className="promobox__image">
                                <img src="./img/promobox.jpg" alt="promo-image" className="promo__img"/>
                            </div>
                            <div className="promobox__description">
                                <div className="promobox__header">
                                    <h4 className="promobox__title">Greek salad</h4>
                                    <span className="promobox__price"><b>$</b>12.99</span>
                                </div>
                                <p className="promobox__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sint
                                    reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel
                                    hic soluta!</p>
                                <button type="button" popovertarget="deliverypopup">Order delivery</button>
                            </div>
                        </div>
                        <div className="promobox">
                            <div className="promobox__image">
                                <img src="./img/promobox.jpg" alt="promo-image" className="promo__img"/>
                            </div>
                            <div className="promobox__description">
                                <div className="promobox__header">
                                    <h4 className="promobox__title">Greek salad</h4>
                                    <span className="promobox__price"><b>$</b>12.99</span>
                                </div>
                                <p className="promobox__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sint
                                    reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel
                                    hic soluta!</p>
                                <button type="button" popovertarget="deliverypopup">Order delivery</button>
                            </div>
                        </div>
                        <div className="promobox">
                            <div className="promobox__image">
                                <img src="./img/promobox.jpg" alt="promo-image" className="promo__img"/>
                            </div>
                            <div className="promobox__description">
                                <div className="promobox__header">
                                    <h4 className="promobox__title">Greek salad</h4>
                                    <span className="promobox__price"><b>$</b>12.99</span>
                                </div>
                                <p className="promobox__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sint
                                    reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel
                                    hic soluta!</p>
                                <button type="button" popovertarget="deliverypopup">Order delivery</button>
                            </div>
                        </div>
                        <div className="promobox">
                            <div className="promobox__image">
                                <img src="./img/promobox.jpg" alt="promo-image" className="promo__img"/>
                            </div>
                            <div className="promobox__description">
                                <div className="promobox__header">
                                    <h4 className="promobox__title">Greek salad</h4>
                                    <span className="promobox__price"><b>$</b>12.99</span>
                                </div>
                                <p className="promobox__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Alias ad culpa, officiis praesentium quas minima incidunt magnam commodi sint
                                    reiciendis necessitatibus delectus neque rerum cumque reprehenderit! Deleniti vel
                                    hic soluta!</p>
                                <button type="button" popovertarget="deliverypopup">Order delivery</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='menu' className="menu">
            <div className="container">
                <div className="menu__wrapper">
                    <div className="menubox__wrapper">
                        <div className="menu__title">
                            <h2 className="section__title">Our restaurant menu</h2>
                        </div>
                        <div className="menubox__gallery">
                            <h3 className="menuboxgallery__title">Cold meals</h3>
                            <section className="menubox">
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Chicken Salad</h4>
                                        <p className="menubox__price"><b>$</b>12.49</p>
                                    </div>
                                </article>
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Tuna salad</h4>
                                        <p className="menubox__price"><b>$</b>18.49</p>
                                    </div>
                                </article>
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Tortillioni</h4>
                                        <p className="menubox__price"><b>$</b>11.49</p>
                                    </div>
                                </article>
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Veggy salad</h4>
                                        <p className="menubox__price"><b>$</b>24.49</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                        <div className="menubox__gallery">
                            <h3 className="menuboxgallery__title">Hot meals</h3>
                            <section className="menubox">
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Pasta Carbonara</h4>
                                        <p className="menubox__price"><b>$</b>15.49</p>
                                    </div>
                                </article>
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Pasta Bologneze</h4>
                                        <p className="menubox__price"><b>$</b>18.49</p>
                                    </div>
                                </article>
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Pasta Fokkacha</h4>
                                        <p className="menubox__price"><b>$</b>17.49</p>
                                    </div>
                                </article>
                                <article className="menubox__unit">
                                    <div className="menubox__image__wrapper">
                                        <img src="./img/menubox.jpg" alt="dish" className="menubox__image"/>
                                    </div>
                                    <div className="menubox__description">
                                        <h4 className="menubox__title">Pasta Salmon</h4>
                                        <p className="menubox__price"><b>$</b>21.49</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    </main>  
    );
}

export default MainComp;