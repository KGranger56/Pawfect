import './Splash.css'

export default function Splash() {
  return (
    <div className='Splash'>
      <p className='skip'>Skip</p>
      <div className='splashImage'></div>
      <h1>"Be a pawfect parent of a pet."</h1>
      <div className='imageBar'>
        <ol>
          <li className='one'></li>
          <li className='two'></li>
          <li className='three'></li>
        </ol>
      </div>
      <button className='getStarted'>Get Started</button>
    </div>
  );
}