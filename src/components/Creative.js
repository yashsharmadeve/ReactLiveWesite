import './Creative.css';
import blankBox from '../assests/images/blank-box.png';
import shape4 from '../assests/images/shape-4.png';


const Creative = () => {
    return (
        <div>
           <div className='create-mar'>
           <div className="container">
                <div className="row">
                    <div className="creative-head">
                        <h3>See some work of our <br/>Creative work.</h3>
                        <div>
                            <a className="our_btn"><i className="fa-solid fa-left-long"></i></a>
                            <a className="our_btn"><i className="fa-solid fa-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 create-row"><img src={blankBox} className="img-fluid" alt="" /></div>
                    <div className="col-md-4 create-row"><img src={blankBox} className="img-fluid" alt="" /></div>
                    <div className="col-md-4 create-row"><img src={blankBox} className="img-fluid" alt="" /></div>
                    <div className="col-md-4 d-md-block d-none create-row"><img src={blankBox} className="img-fluid" alt="" /></div>
                    <div className="col-md-4 d-md-block d-none create-row"><img src={blankBox} className="img-fluid" alt="" /></div>
                    <div className="col-md-4 d-md-block d-none create-row"><img src={blankBox} className="img-fluid" alt="" /></div>
                </div>
                <div className="row">
                    <a href="#" className="text-center creative-see">See more of these</a>
                </div>
            </div>
            <div className='shape-4'>
               <img src={shape4}/>
           </div>
           </div>
        </div>
    );
}

export default Creative;