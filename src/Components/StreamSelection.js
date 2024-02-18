import './scss/standselc.scss'
import TenthImg from '../Assets/10th.png'
import TwethImg from '../Assets/12th.png'
import { Link } from 'react-router-dom';

const StreamSelection = () => {
  return (
    <div className='standselc coontainer pb-5' data-aos="fade-up"
    data-aos-anchor-placement="center-center">
        <h2>Know the Best in You 🚀</h2>
        <div className="stream-selection-container row">

        <div className="col-3 card rounded-3 shadow-lg pb-5" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div className='streamlogo'>
            <br />
                <img src={TenthImg} /> 
            </div>
            <span className="highlight">10th</span>
            <h2 className='title mt-2'>
                Embrace the blank canvas <br />with confidence he journey <br />is yours to mold
            </h2>
            <div className="button-container mt-3">
                <Link to='/tenth' className='start-button'>Start</Link>
                {/* <button className="start-button">Start</button> */}
            </div>
        </div>

        <div className="col-3 card rounded-3 shadow-lg pb-5" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div className='streamlogo'>
                <img src={TwethImg} /> 
            </div>
            <span className="highlight">12th</span>
            <h2 className='title mt-2'>
            The world is your canvas. <br />Navigate the crossroads with <br/>purpose and clarity.
            </h2>
            <div className="button-container mt-3">
                <Link to='/twelth' className='start-button'>Start</Link>
            </div>
        </div>
        </div>
    </div>
  );
};

export default StreamSelection;