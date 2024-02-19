import './scss/common.scss'
import './scss/intro.scss'
import introImg from '../Assets/intro-img.webp'

function Intro() {
    return (
        <div className='intro-bg pt-1 pb-5'>
            <div className='coontainer'>
                <div className='intro-main row'>
                    <div className='message col-8'>
                        <h1>WELCOME TO<br/><span>MARG</span>DARSHAN<span className='dotcom'>.com</span></h1>
                        <p className='mt-4'>Are you a 16 to 18-year-old dreamer?</p>
                        <h2 className='mt-2'>
                        Fresh out of your 10th or 12th class, feeling the weight of the future on your shoulders? The possibilities seem endless, yet the path is unclear. Let's navigate this together.
                        </h2>
                    </div>
                    <div className='anim-pho col-4 img-fluid'>
                        <img src={introImg} alt="Intro Type Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;