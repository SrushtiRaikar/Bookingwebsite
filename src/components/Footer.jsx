import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/* column1 */}
                    <div className='col'>
                        <h4>memes</h4>
                        <ul className='list-unstyled'>
                            <li>8787687</li>
                            <li>Pune</li>
                            <li>12, street, south pune</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className='col'>
                        <h4>Stuff</h4>
                        <ul className='list-unstyled'>
                            <li>8787687</li>
                            <li>Pune</li>
                            <li>12, street, south pune</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className='col'>
                        <h4>Column</h4>
                        <ul className='list-unstyled'>
                            <li>8787687</li>
                            <li>Pune LOL</li>
                            <li>12, street, south pune</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} 4WHEELS | All rights reserved | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer