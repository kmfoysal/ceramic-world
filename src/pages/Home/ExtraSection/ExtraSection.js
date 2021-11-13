import React from 'react';
import './ExtraSection.css';

const ExtraSection = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-6 left-bg"></div>
                <div className="col-md-6 right-bg">
                    <div className='ms-5'>
                        <h2 className='text-white mb-3'>CONTEMPORARY CERAMICS
                        <br />
                        MADE BY NATURAL & LOCAL 
                        <br />
                        MATERIALS</h2>
                        <p className='mb-4 w-75' style={{color:'#e9e8e6'}} >
                        Lorem ipsum dolor sit amet, consectet adipiscing elit,sed do eiusm por incididut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <button className='common-btn'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;