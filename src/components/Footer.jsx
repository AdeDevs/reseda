export default function Footer() {
    return (
        <footer>
            <section className="head">
                <div className="footer-info">
                    <h1>SUBSCRIBE</h1>
                    <p>Sign up with your email address to receive news and updates.</p>
                    <form action="">
                        <input type="email" placeholder="Email Address"/>
                        <button>sign up</button>
                    </form>
                    <p>We respect your privacy</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li className="first">sitemap</li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">GALLERY</a></li>
                        <li><a href="#">INFORMATION</a></li>
                        <li><a href="#">SCHEDULE A SHOOT</a></li>
                    </ul>
                    <ul>
                        <li className="first">follow</li>
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">LINKEDIN</a></li>
                        <li><a href="#">TWITTER</a></li>
                    </ul>
                </div>
            </section>
            <h6>reseda</h6>
        </footer>
    )
}