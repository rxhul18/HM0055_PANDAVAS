import React from 'react';
import WhyMd from '../Assets/why_to_use.jpeg'
import './scss/WhyMd.scss'

const Whymd = () => {
    return (
        <div className='whymdmain'>
            <div className='coontainer row'>
                <div className='part-1 col-4'>
                    <img src={WhyMd} alt='image' className='img-fluid rounded-2'/>
                </div>
                <div className='part-2 col-8'>
                    <h2>Why MARGDARSAN<span>?</span></h2>
                    <br />
                    <h3>Explore your career clusters with us 🚀</h3>
                    <p className='p-0 mt-3'>Imagine a world where your passion aligns seamlessly with your career. Picture waking up every day
                        excited about what lies ahead. Our Career Finder is not just a tool; it's your guide to turning 
                        uncertainty into empowerment.(use on the page for choosing the paths)</p>
                </div>
            </div>
        </div>
    );
}

export default Whymd;