export default function SchedulePage(params) {
    return (
        <div className="schedule-page">
            <main className="schedule-main">
                <section className="about-schedules">
                    <div className="schedule-info">
                        <h1>schedule your shoot</h1>
                        <p className="schedule-text">
                        View availability and book a session. It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
                        </p>
                        <div className="appointment-box">
                        <ul className="sign">
                            <li>sign up</li>
                            <li>login</li>
                        </ul>
                            <h2>select appointment</h2>
                           <div className="available-appts">
                           <div className="appointment">
                                <section>
                                <h3>Body Barre Signature</h3>
                                <p>1 hour 30 minutes @ $30.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>High Energy Hip Hop Hits</h3>
                                <p>1 hour @ $25.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>20 Minute Sculpt Workout</h3>
                                <p>20 minutes @ $10.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>Contemporary Interpretive</h3>
                                <p>1 hour @ $25.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>Jazz Funk HIIT</h3>
                                <p>1 hour @ $25.00</p>
                                </section>
                                <button>book</button>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className="schedule-bg"></div>
                </section>
            </main>
        </div>
    )
}