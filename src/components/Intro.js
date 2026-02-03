function Intro() {
  return (
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
                    <button type='button' className="reserve" popoverTarget="mypopup">Reserve table</button>
                </div>
            </div>
        </section>
 
    );
}

export default Intro;