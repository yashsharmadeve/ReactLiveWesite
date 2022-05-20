import './Anything.css'
import icon1 from '../assests/images/icon-1.png';
import icon2 from '../assests/images/icon-2.png';
import shape2 from '../assests/images/shape-2.png';
import shape3 from '../assests/images/shape-3.png';
import lamp from '../assests/images/lamp.png';

const Anything = () => {
    return (
        <div>
            <div className='main'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="Any_main">
                                <h3>Anything you need,we’ve got you covered</h3>
                                <button className="btn Get_in_Touch">Get in Touch</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src={icon1} alt="" />
                                </div>
                                <div class="card-body">
                                    <h3>Web & Graphic Design</h3>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>Web & App Development</h3>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shape-2'>
                    <img src={shape2} />
                </div>
                <div className='our-mar'>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 my-auto">
                                <img src={lamp} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 my-auto">
                                <div className="our_company">
                                    <h5>OUR COMPANY</h5>
                                    <h3>Some Fine <br />Words About Us</h3>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit amet.</p>
                                    <p>Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.    </p>
                                    <a className="our_btn"><i className="fa-solid fa-left-long"></i></a>
                                    <a className="our_btn"><i className="fa-solid fa-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shape-3'>
                    <img src={shape3} />
                </div>
            </div>
        </div>
    );
}

export default Anything;