import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/SCSS/tenth.scss'
function Tenth() {
    return (
        <div className='tenthmain'>
            <div className='part1'>
                <div className='coontainer'>
                    <h2 className='p-4'>
                        {/* Embrace the blank canvas <br />with confidence he journey <br />is yours to mold. */}
                        Exploring Your Options <br /> After <span>10Th</span>.
                    </h2>
                </div>
            </div>
            
            <div className='coontainer'>
            <h3>Discover the rigth path for your future career. Choose an option<br/> below to get started.</h3>
                <div className='naving-btn d-flex gap-4 mt-5'>
                    <p><span>*</span>Already choosed the path!!</p>
                    <Link to={''} className='start-button'>Explore Chosed Field</Link>

                    <p><span>*</span>Still uncretain about carrier?</p>
                    <Link to='/quickquestion' className='start-button'>Quick Question</Link>
                </div>
            </div>

        </div>
    );
}

export default Tenth;