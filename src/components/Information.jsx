export default function InformationPage() {
    return (
        <div className="info-page">
            <main className="info-main">
                <div className="info-about">
                    <h1>about sofia</h1>
                    <p className="about-text">
                        Sofia Parazi is a photographer, art director, and filmmaker based in Los Angeles. Raised in the south of Italy, Sofia Pazari was drawn to spending as much time as possible outdoors. Sofia’s photos use natural light as a callback to a childhood spent basking in the sun. <br /> <br />
                        Sofia is based in Los Angeles, CA. For business inquiries, feel free to contact her.
                    </p>
                    <form action="">
                        <p>Name <span>(required)</span></p>
                        <section className="name">
                            <div>
                                <label htmlFor="first">First Name</label>
                                <input type="text" id="first" />
                            </div>
                            <div>
                                <label htmlFor="last">Last Name</label>
                                <input type="text" id="last" />
                            </div>
                        </section>

                        <p>Email <span>(required)</span></p>
                        <input type="email" id="email" />

                        <p>Message <span>(required)</span></p>
                        <textarea id="message" rows="4"></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="about-bg"></div>
            </main>
        </div>
    )
}