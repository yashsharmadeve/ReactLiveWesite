import './Banner.css';
import head from '../assests/images/head-img.png';

const Banner = () => {
    return (
        <div>
            <div className='top-mar'>
                <div className='top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-auto order-md-1 order-2">
                            <div className="Head-Banner">
                                <h1>The spirit of Digital Agency</h1>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                                <div className='Top-Banner-Button'>
                                    <button className="btn">More About us</button>
                                    <a href="#" className="">Get in Touch.</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 order-1">
                            <img src={head} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Banner;