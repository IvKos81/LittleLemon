function Promo({promoDishes}) {
  return (
        <section id='promo' className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo__title">
                        <h2 className="section__title">This week special</h2>
                    </div>
                    <div className="promo__boxgallery">
                        {
                            promoDishes.map(unit => {
                                return(
                                   <div className="promobox" key={unit.id}>
                                        <div className="promobox__image">
                                            <img src={unit.image} alt="promo-image" className="promo__img"/>
                                        </div>
                                        <div className="promobox__description">
                                            <div className="promobox__header">
                                                <h4 className="promobox__title">{unit.title}</h4>
                                                <span className="promobox__price"><b>$</b>{unit.price}</span>
                                            </div>
                                            <p className="promobox__text">{unit.description}</p>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Promo;