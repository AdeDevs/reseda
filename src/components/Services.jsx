export default function ServicesPage() {
    return (
        <div className="services-page">
            <main className="services-main">
                <div className="services-list">
                    <div className="services-about">
                        <h1>standard package</h1>
                        <p>Package includes:</p>
                        <ul className="package-list">
                            <li>30 minute session</li>
                            <li>Color grading + retouching</li>
                            <li>A private online gallery with 5+ digital images delivered 2-3 weeks from the session</li>
                            <li>Best for client go-sees, online portfolio, professional social media presence</li>
                        </ul>
                        <button>$180 | Purchase Package</button>
                    </div>
                    <div className="services-bg standard"></div>
                </div>
                <div className="services-list">
                    <div className="services-about">
                        <h1>package</h1>
                        <p>Package includes:</p>
                        <ul className="package-list">
                            <li>2 hour session</li>
                            <li>1 - 2 wardrobe changes</li>
                            <li>Color grading + retouching</li>
                            <li>A private online gallery with 18+ digital images delivered 3-5 weeks from the session</li>
                            <li>Best for client go-sees, online portfolio, social media, special occasions (birthdays, anniversaries)</li>
                        </ul>
                        <button>$250 | Purchase Package</button>
                    </div>
                    <div className="services-bg deluxe"></div>
                </div>
                <div className="services-list">
                    <div className="services-about">
                        <h1>package</h1>
                        <p>Package includes:</p>
                        <ul className="package-list">
                            <li>3 hour session</li>
                            <li>3 wardrobe changes</li>
                            <li>Color grading + retouching</li>
                            <li>Multiple models</li>
                            <li>A private online gallery with 24+ digital images delivered 4-6 weeks from the session</li>
                            <li>Best for indie agencies and print campaigns</li>
                        </ul>
                        <button>$300 | Purchase Package</button>
                    </div>
                    <div className="services-bg professional"></div>
                </div>
                <div className="services-list">
                    <div className="services-about">
                    <h1>package</h1>
                    <p>Package includes:</p>
                    <ul className="package-list">
                        <li>3 hour session</li>
                        <li>Unlimited wardrobe changes</li>
                        <li>Color grading + retouching</li>
                        <li>Multiple models</li>
                        <li>Multiple models</li>
                        <li>Best for agencies and industry clients</li>
                    </ul>
                    <button>$500 | Purchase Package</button>
                    </div>
                    <div className="services-bg elite"></div>
                </div>
            </main>
        </div>
    )
}