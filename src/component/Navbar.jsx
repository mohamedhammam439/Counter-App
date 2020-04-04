import React from 'react';

const Navbar = (props) => {
    return ( 
        <div className='container'>
            <nav className="navbar navbar-light bg-darkgray">
                <a className="navbar-brand" >Navbar{" "}
                    <span className='badge badge-pill badge-danger'> {props.totalcounter} </span>
                </a>
            </nav>
        </div>
     );
}
 
export default Navbar;