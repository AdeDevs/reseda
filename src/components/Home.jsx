import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
    const [fullScreenView, setFullScreenView] = useState();
    const toggleFullScreen = () => {
        setFullScreenView(!fullScreenView)
    }
    return (
        <div className="home-page">
            <header className="home-hero">
                <h6>reseda</h6>
                <section className="about">
                    <div className="about-bg"></div>
                    <div className="about-info">
                        <h1>LA-based Photography by Sofia Parazi</h1>
                        <section className="about-foot">
                            <p>
                                Sofia Parazi is an LA based photographer, cinematographer and art director. Her juxtaposition between light and shadow punctuates her signature style. Sofia believes photos are metaphors, making the abstract concrete and mystifying the mundane.
                            </p>
                            <p className="link"><NavLink to="/">About Sofia</NavLink></p>
                        </section>
                    </div>
                </section>
            </header>
            <main className="home-main">
                <section className="winter-collection">
                    <div className="winter">
                        <div className="winter-info">
                            <h1>winter collection</h1>
                            <div className="winter-foot">
                                <p>
                                    Photos are metaphors, making the abstract concrete and mystifying the mundane. Be clear, be confident, and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself.
                                </p>
                                <p><NavLink to="/">view full gallery</NavLink></p>
                                <div className="winter-blurry"></div>
                            </div>
                        </div>
                        <div className="winter-bg" onClick={toggleFullScreen}></div>
                    </div>
                    <div className="winter-potrait"></div>
                    <div className={`test ${fullScreenView ? "show" : ""}`}>
                        <div className="togle" onClick={toggleFullScreen}>
                            <span className="first"></span>
                            <span className="second"></span>
                        </div>
                        <div className="test-bg"></div>
                    </div>
                </section>
            </main>
        </div>
    )
}