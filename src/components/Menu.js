function Menu({coldMenu, hotMenu}) {
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
                                {coldMenu.map(cold=>{
                                    return(
                                        <article className="menubox__unit" key={cold.id}>
                                            <div className="menubox__image__wrapper">
                                                <img src={cold.image} alt="dish" className="menubox__image"/>
                                            </div>
                                            <div className="menubox__description">
                                                <h4 className="menubox__title">{cold.title}</h4>
                                                <p className="menubox__price"><b>$</b>{cold.price}</p>
                                            </div>
                                        </article>
                                    )
                                })}
                            </section>
                        </div>
                        <div className="menubox__gallery">
                            <h3 className="menuboxgallery__title">Hot meals</h3>
                            <section className="menubox">
                                {hotMenu.map(hot=>{
                                    return(
                                        <article className="menubox__unit" key={hot.id}>
                                            <div className="menubox__image__wrapper">
                                                <img src={hot.image} alt="dish" className="menubox__image"/>
                                            </div>
                                            <div className="menubox__description">
                                                <h4 className="menubox__title">{hot.title}</h4>
                                                <p className="menubox__price"><b>$</b>{hot.price}</p>
                                            </div>
                                        </article>
                                    )
                                })}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Menu;