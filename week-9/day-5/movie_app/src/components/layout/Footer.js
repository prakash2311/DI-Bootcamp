 import React from 'react';
 
 function Footer() {
    return (
        <div>
            <div className='row'>
                <div className='col=md-12'>
                    <div className='footer p-3 mt-4 text-center bg-dark text-light'>
                        Using <i className='fab fa-react'/>
                        integrated with external movie data apikey
                        <a href='http://www.omdbapi.com/' target='_blank' rel='noopener noreferrer'>
                            OMDB
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Footer;