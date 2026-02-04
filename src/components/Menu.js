function Menu() {
  return (
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
  )
}

export default Menu;