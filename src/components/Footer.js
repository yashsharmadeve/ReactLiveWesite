import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="Foot-mar">
                <footer className="container">
                    <div className="row text-center foot-row">
                        <h5>Doob</h5>
                        <h2>CREATIVITY MODE</h2>
                        <ul id='foot-list'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <p className="copy">&copy; 2019 - Doob,All Right Reserved</p>
                        <div className="foot-icon">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-solid fa-basketball"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
