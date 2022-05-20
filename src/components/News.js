import './News.css';

const News = () => {
    return (
        <div>
            <div className="News-mar">
                <div className="container">
                    <div className="row">
                        <div className="News-head">
                            <div>
                                <h5>Blog Stories</h5>
                                <h3>Check Our News</h3>
                            </div>
                            <div>
                                <a className="our_btn"><i className="fa-solid fa-left-long"></i></a>
                                <a className="our_btn"><i className="fa-solid fa-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card News-card-main News-active">
                                <div className="card-body News-card">
                                    <h5>New Adventure</h5>
                                    <div className="date">14 May 2022</div>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                                    <div className='News-arrow'>
                                        <a href='#'><i className="fa-solid fa-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card News-card-main">
                                <div className="card-body News-card">
                                    <h5>New Adventure</h5>
                                    <div className="date">14 May 2022</div>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                                    <div className='News-arrow'>
                                        <a href='#'><i className="fa-solid fa-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card News-card-main">
                                <div className="card-body News-card">
                                    <h5>New Adventure</h5>
                                    <div className="date">14 May 2022</div>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                                    <div className='News-arrow'>
                                        <a href='#'><i className="fa-solid fa-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;