import { NavLink } from "react-router-dom";

export default function HomePage() {
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
        </div>
    )
}