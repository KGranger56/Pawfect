import React from "react";
import './Start.css';


function Start() {

  return (
    <div className="Start">
      <div className="splash">
        <div className='pawfectLogo'></div>
        <h1>Pawfect</h1>
      </div>

      <div className='walkthrough'>
        <div className="walkthroughOne">
          <p className='skip'>Skip</p>
          <div className='splashImage'></div>
          <h1>"Be a pawfect parent of a pet."</h1>
          <div className='imageBar'>
            <ol>
              <li className='one active'></li>
              <li className='two'></li>
              <li className='three'></li>
            </ol>
          </div>
        </div>

        <div className="walkthroughTwo">
          <p className='skip'>Skip</p>
          <div className='splashImage'></div>
          <h1>"Best petcare service at your doorstep.."</h1>
          <div className='imageBar'>
            <ol>
              <li className='one'></li>
              <li className='two active'></li>
              <li className='three'></li>
            </ol>
          </div>
        </div>

        <div className="walkthroughThree">
          <div className='splashImage'></div>
          <h1>"Best petcare service at your doorstep.."</h1>
          <div className='imageBar'>
            <ol>
              <li className='one'></li>
              <li className='two'></li>
              <li className='three active'></li>
            </ol>
          </div>
          <button className='getStarted'>Get Started</button>
        </div>
      </div>

    </div>
  );
}

export default Start;
